// Browser + server conversion event for OpenAI Ads (ChatGPT Ads pixel TxB1TEZZJHeLYnpYBMgsC7).
// Server leg relays through public/api/oai-conversion.php (API key stays server-side,
// same pattern as lib/crm.ts -> public/api/collect.php) so the Conversions API key
// never reaches the browser.

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void
  }
}

export function trackRegistrationCompleted() {
  const eventId =
    typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now())

  try {
    window.oaiq?.('measure', 'registration_completed', { type: 'customer_action' }, { event_id: eventId })
  } catch {
    // pixel blocked or not loaded yet; fire-and-forget
  }

  fetch('/api/oai-conversion.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event_id: eventId, source_url: window.location.href }),
  }).catch(() => {})
}
