<?php
// Relay: acdyon.com registration -> OpenAI Ads Conversions API (server leg of the
// registration_completed conversion). Deploy to public_html/api/oai-conversion.php.
// Config: _oai_config.php next to this file (NOT in git; api/.htaccess denies direct
// access) returning ['pixelId' => '<PIXEL_ID>', 'apiKey' => '<CONVERSIONS_API_KEY>']
// Never blocks the visitor: forward failure is logged and still answers 200.

const ALLOWED_ORIGINS = ['https://acdyon.com', 'https://www.acdyon.com'];
const MAX_BODY = 4000;

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
if (!is_array($b) || empty($b['event_id'])) out(400, ['error' => 'event_id required']);

$cfgPath = __DIR__ . '/_oai_config.php';
$cfg = is_file($cfgPath) ? include $cfgPath : null;
if (!is_array($cfg) || empty($cfg['pixelId']) || empty($cfg['apiKey'])) {
    error_log('oai-conversion: relay config missing');
    out(200, ['ok' => true]); // visitor unaffected
}

$payload = [
    'validate_only' => false,
    'events' => [[
        'id' => (string)$b['event_id'],
        'type' => 'registration_completed',
        'timestamp_ms' => (int)round(microtime(true) * 1000),
        'source_url' => (string)($b['source_url'] ?? ''),
        'action_source' => 'web',
        'data' => ['type' => 'customer_action'],
    ]],
];

$ch = curl_init('https://bzr.openai.com/v1/events?pid=' . urlencode($cfg['pixelId']));
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer ' . $cfg['apiKey']],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 2,
    CURLOPT_TIMEOUT => 4,
]);
$res = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($res === false || $code >= 300) {
    error_log("oai-conversion: forward failed http=$code err=" . curl_error($ch) . " body=" . substr((string)$res, 0, 200));
}
curl_close($ch);
out(200, ['ok' => true]);
