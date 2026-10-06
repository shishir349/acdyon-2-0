// Mirror a website form submission into the Acdyon CRM (unpluggeddd.com) as a lead.
// Goes via the same-origin PHP relay (/api/collect.php), which holds the shared secret.
// Fire-and-forget: never throws, never blocks the visitor's download / redirect.
// Named "collect" not "*lead*": ad-blocker/privacy-extension filter lists commonly
// block URLs containing "lead" as a tracking-pixel pattern, silently dropping the
// request client-side with no trace on either end.
export type CrmLead = {
  formType: 'brochure' | 'contact' | 'consultation'
  fullName: string
  email: string
  phone?: string
  country?: string
  brochure?: string
  message?: string
  sourcePage?: string
  extra?: Record<string, string | undefined>
}

export function pushToCrm(l: CrmLead): void {
  try {
    const extra: Record<string, string> = {}
    for (const [k, v] of Object.entries({ country: l.country, ...l.extra })) if (v) extra[k] = v
    void fetch('/api/collect.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true, // survives the redirect to /thank-you
      body: JSON.stringify({
        form_type: l.formType,
        full_name: l.fullName,
        email: l.email,
        phone: l.phone,
        brochure: l.brochure,
        message: l.message,
        page_url: typeof window !== 'undefined' ? window.location.href : l.sourcePage,
        extra,
      }),
    }).catch(() => {})
  } catch {
    /* CRM mirror must never break the form */
  }
}
