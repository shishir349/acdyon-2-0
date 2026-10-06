<?php
// API #1 (relay): acdyon.com form -> CRM ingest edge function. Deploy to public_html/api/collect.php.
// Renamed from brochure-lead.php: filenames containing "lead" match common ad-blocker/
// privacy-extension filter lists (EasyPrivacy etc.), which silently drop the request
// client-side before it ever reaches this server — the visitor's form still succeeds,
// the CRM mirror just vanishes with no trace anywhere. Neutral name avoids that class
// of false positive.
// Config: _config.php next to this file (NOT in git; api/.htaccess denies direct access) returning
//   ['url' => 'https://<ref>.supabase.co/functions/v1/website-leads-webhook', 'secret' => '<WEBSITE_LEADS_SECRET>']
// Never blocks the visitor: CRM failure is logged and still answers 200.

const ALLOWED_ORIGINS = ['https://acdyon.com', 'https://www.acdyon.com'];
const MAX_BODY = 20000;
const RATE_MAX = 20;      // requests per IP per window
const RATE_WINDOW = 60;   // seconds

header('Content-Type: application/json');
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}

function out(int $code, array $body): never { http_response_code($code); echo json_encode($body); exit; }

$method = $_SERVER['REQUEST_METHOD'] ?? '';
if ($method === 'OPTIONS') out(204, []);
if ($method !== 'POST') out(405, ['error' => 'method not allowed']);

$raw = file_get_contents('php://input', false, null, 0, MAX_BODY + 1);
if (strlen($raw) > MAX_BODY) out(413, ['error' => 'payload too large']);
$b = json_decode($raw, true);
if (!is_array($b) || array_is_list($b)) out(400, ['error' => 'invalid json']);

// Honeypot: bots fill the hidden field. Pretend success, drop.
if (!empty($b['company_website'])) out(200, ['ok' => true]);

// Per-IP rate limit (file counter; ponytail: per-process host, swap for Redis/DB if the site scales out).
// Behind Hostinger's proxy/CDN REMOTE_ADDR can be shared by everyone; prefer the forwarded client IP.
$ip = trim(explode(',', $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'x')[0]);
$f = sys_get_temp_dir() . '/acdyon_rl_' . md5($ip);
$fh = fopen($f, 'c+');
if ($fh && flock($fh, LOCK_EX)) {
    [$start, $n] = array_pad(array_map('intval', explode(',', stream_get_contents($fh) ?: '')), 2, 0);
    $now = time();
    if ($now - $start >= RATE_WINDOW) { $start = $now; $n = 0; }
    $n++;
    ftruncate($fh, 0); rewind($fh); fwrite($fh, "$start,$n"); flock($fh, LOCK_UN); fclose($fh);
    if ($n > RATE_MAX) out(429, ['error' => 'too many requests']);
}

// Forward only known fields.
$allow = ['full_name', 'first_name', 'last_name', 'email', 'phone', 'brochure', 'form_type', 'page_url', 'message', 'extra'];
$payload = array_intersect_key($b, array_flip($allow));

$cfgPath = __DIR__ . '/_config.php';
$cfg = is_file($cfgPath) ? include $cfgPath : null;
if (!is_array($cfg) || empty($cfg['url']) || empty($cfg['secret'])) {
    error_log('collect: relay config missing');
    out(200, ['ok' => true]); // visitor unaffected
}

// Hit log: every request that reaches this file, before we know whether the CRM
// forward succeeds. The forward itself is fire-and-forget from the browser's side
// (never blocks the visitor), so this line is the only record that a submission
// even reached the server — without it, a client-side drop (ad blocker, network,
// closed tab) is indistinguishable from a server-side one. Rotate/trim manually;
// ponytail: a flat file is enough at this volume, add real logging if it isn't.
@file_put_contents(
    sys_get_temp_dir() . '/acdyon_collect.log',
    date('c') . " ip=$ip email=" . ($payload['email'] ?? '') . " phone=" . ($payload['phone'] ?? '') . "\n",
    FILE_APPEND
);

$ch = curl_init($cfg['url']);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'X-Webhook-Secret: ' . $cfg['secret']],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 2,
    CURLOPT_TIMEOUT => 4,
]);
$res = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($res === false || $code >= 300) {
    error_log("collect: CRM forward failed http=$code err=" . curl_error($ch) . " body=" . substr((string)$res, 0, 200));
    if ($code === 400) out(400, ['error' => 'email or phone required']); // real client error, not CRM outage
}
curl_close($ch);
out(200, ['ok' => true]);
