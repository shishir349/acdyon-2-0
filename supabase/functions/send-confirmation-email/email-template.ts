const BASE_URL = 'https://acdyon.com'

export interface LeadRecord {
  id?: string
  lead_type: 'consultation' | 'contact' | 'event_rsvp' | 'scholarship_calculator' | 'brochure_download'
  email: string
  name: string
  source_page: string
  phone?: string | null
  country?: string | null
  program_type?: string | null
  status?: string
  created_at?: string
}

// source_page → brochure path on acdyon.com
const BROCHURE_PATH: Record<string, string> = {
  '/doctoral-programs/dba/dunster-business-school': '/brochures/degrees/dunster-dba.html',
  '/doctoral-programs/dba/kennedy-university':      '/brochures/degrees/kennedy-dba.html',
  '/doctoral-programs/dba/eimt':                    '/brochures/degrees/eimt-dba.html',
  '/doctoral-programs/dba/lsmt':                    '/brochures/degrees/lsmt-dba.html',
  '/doctoral-programs/dba/birchwood':               '/brochures/degrees/birchwood-dba.html',
  '/doctoral-programs/phd/dunster-business-school': '/brochures/degrees/dunster-phd.html',
  '/doctoral-programs/phd/kennedy-university':      '/brochures/degrees/kennedy-phd.html',
  '/honorary-recognition/dunster-business-school':  '/brochures/honorary/dunster.html',
  '/honorary-recognition/kennedy-university':       '/brochures/honorary/kennedy.html',
  '/honorary-recognition/lsbs':                     '/brochures/honorary/london-bs.html',
  '/programs/agentic-ai-automation-mastery':        '/brochures/agentic-ai-automation-mastery.html',
  '/programs/agentic-ai-cybersecurity-mastery':     '/brochures/agentic-ai-cybersecurity-mastery.html',
}

export function getBrochureUrl(sourcePage: string): string | null {
  const path = BROCHURE_PATH[sourcePage]
  return path ? `${BASE_URL}${path}` : null
}

function firstName(fullName: string): string {
  return fullName.split(' ')[0] ?? fullName
}

// ─── Shared shell ────────────────────────────────────────────────────────────

function shell(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AcdyOn</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background:#0f172a;border-radius:12px 12px 0 0;padding:28px 40px;text-align:center;">
              <a href="${BASE_URL}" style="text-decoration:none;">
                <span style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">Acd<span style="color:#1E40FF;">y</span>On</span>
              </a>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 40px 32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
              ${bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#64748b;">
                AcdyOn · Doctoral Advancement &amp; Honorary Recognition
              </p>
              <p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">
                <a href="mailto:admissions@acdyon.com" style="color:#1E40FF;text-decoration:none;">admissions@acdyon.com</a>
                &nbsp;·&nbsp;
                <a href="${BASE_URL}" style="color:#1E40FF;text-decoration:none;">acdyon.com</a>
              </p>
              <p style="margin:8px 0 0;font-size:11px;color:#cbd5e1;">
                You are receiving this because you submitted a form on AcdyOn. This is a transactional email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

// ─── Brochure confirmation ────────────────────────────────────────────────────

export function brochureEmail(lead: LeadRecord, brochureUrl: string): { subject: string; html: string } {
  const programme = lead.program_type ?? 'your selected programme'
  const name = firstName(lead.name)
  const subject = `Your ${programme} brochure — AcdyOn`

  const body = `
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a;line-height:1.3;">
      Your brochure is ready, ${name}.
    </h1>
    <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.6;">
      Thank you for your interest in the <strong style="color:#0f172a;">${programme}</strong> programme.
      We've saved your details and your brochure is one click away.
    </p>

    <!-- CTA button -->
    <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
      <tr>
        <td style="background:#1E40FF;border-radius:8px;padding:0;">
          <a href="${brochureUrl}" target="_blank"
             style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.2px;">
            Download Brochure →
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px;font-size:14px;color:#64748b;line-height:1.6;">
      A member of our admissions team will reach out within 1 business day to answer any questions and guide
      you through the application process.
    </p>
    <p style="margin:0 0 32px;font-size:14px;color:#64748b;line-height:1.6;">
      In the meantime, you can also
      <a href="${BASE_URL}/book-consultation" style="color:#1E40FF;text-decoration:none;font-weight:500;">book a free consultation</a>
      to speak directly with an advisor.
    </p>

    <!-- Gold divider -->
    <table cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 24px;">
      <tr><td style="height:3px;background:linear-gradient(90deg,#D4AF37,#f59e0b 50%,#D4AF37);border-radius:2px;"></td></tr>
    </table>

    <p style="margin:0;font-size:13px;color:#94a3b8;">
      Warm regards,<br />
      <strong style="color:#0f172a;">The AcdyOn Admissions Team</strong>
    </p>`

  return { subject, html: shell(body) }
}

// ─── Consultation confirmation ────────────────────────────────────────────────

export function consultationEmail(lead: LeadRecord): { subject: string; html: string } {
  const name = firstName(lead.name)
  const programme = lead.program_type
  const subject = `We received your consultation request — AcdyOn`

  const body = `
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a;line-height:1.3;">
      We'll be in touch soon, ${name}.
    </h1>
    <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.6;">
      Thank you for reaching out. We've received your consultation request
      ${programme ? `for <strong style="color:#0f172a;">${programme}</strong>` : ''} and one of our advisors
      will contact you within <strong>1 business day</strong>.
    </p>

    <!-- What to expect box -->
    <table cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 32px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
      <tr>
        <td style="padding:24px 28px;">
          <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#1E40FF;">
            What happens next
          </p>
          <table cellpadding="0" cellspacing="0">
            ${['Our team reviews your profile and goals', 'An advisor contacts you to discuss your pathway', 'We match you with the right programme and university'].map((step, i) => `
            <tr>
              <td style="padding:4px 12px 4px 0;vertical-align:top;">
                <span style="display:inline-block;width:22px;height:22px;background:#1E40FF;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#fff;">${i + 1}</span>
              </td>
              <td style="padding:4px 0;font-size:14px;color:#475569;line-height:1.5;">${step}</td>
            </tr>`).join('')}
          </table>
        </td>
      </tr>
    </table>

    <!-- Gold divider -->
    <table cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 24px;">
      <tr><td style="height:3px;background:linear-gradient(90deg,#D4AF37,#f59e0b 50%,#D4AF37);border-radius:2px;"></td></tr>
    </table>

    <p style="margin:0;font-size:13px;color:#94a3b8;">
      Warm regards,<br />
      <strong style="color:#0f172a;">The AcdyOn Admissions Team</strong>
    </p>`

  return { subject, html: shell(body) }
}

// ─── Internal team notification ───────────────────────────────────────────────

export function internalNotifyEmail(lead: LeadRecord): { subject: string; html: string } {
  const subject = `New ${lead.lead_type} lead: ${lead.name}`
  const row = (label: string, value?: string | null) =>
    value ? `<tr><td style="padding:4px 12px 4px 0;color:#64748b;font-size:14px;">${label}</td><td style="padding:4px 0;color:#0f172a;font-size:14px;font-weight:600;">${value}</td></tr>` : ''

  const body = `
    <h1 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#0f172a;">New lead submitted</h1>
    <table cellpadding="0" cellspacing="0">
      ${row('Name', lead.name)}
      ${row('Email', lead.email)}
      ${row('Phone', lead.phone)}
      ${row('Country', lead.country)}
      ${row('Type', lead.lead_type)}
      ${row('Programme', lead.program_type)}
      ${row('Source page', lead.source_page)}
    </table>`

  return { subject, html: shell(body) }
}

// ─── Generic fallback ─────────────────────────────────────────────────────────

export function genericEmail(lead: LeadRecord): { subject: string; html: string } {
  const name = firstName(lead.name)
  const subject = `We received your message — AcdyOn`

  const body = `
    <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#0f172a;line-height:1.3;">
      Thank you, ${name}.
    </h1>
    <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.6;">
      We've received your message and our team will be in touch shortly.
    </p>
    <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
      <tr>
        <td style="background:#1E40FF;border-radius:8px;padding:0;">
          <a href="${BASE_URL}/book-consultation" target="_blank"
             style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">
            Book a Free Consultation →
          </a>
        </td>
      </tr>
    </table>

    <!-- Gold divider -->
    <table cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 24px;">
      <tr><td style="height:3px;background:linear-gradient(90deg,#D4AF37,#f59e0b 50%,#D4AF37);border-radius:2px;"></td></tr>
    </table>

    <p style="margin:0;font-size:13px;color:#94a3b8;">
      Warm regards,<br />
      <strong style="color:#0f172a;">The AcdyOn Admissions Team</strong>
    </p>`

  return { subject, html: shell(body) }
}
