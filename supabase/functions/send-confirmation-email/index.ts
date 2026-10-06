import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import {
  type LeadRecord,
  getBrochureUrl,
  brochureEmail,
  consultationEmail,
  genericEmail,
  internalNotifyEmail,
} from './email-template.ts'

const CIO_API = 'https://api.customer.io/v1/send/email'
const FROM = 'AcdyOn <hello@acdyon.com>'
const TEAM_EMAIL = 'shishir@acdyon.com'

async function sendEmail(to: string, subject: string, html: string): Promise<Response> {
  return fetch(CIO_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${Deno.env.get('CUSTOMERIO_APP_API_KEY')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ to, from: FROM, subject, body: html }),
  })
}

serve(async (req) => {
  try {
    const payload = await req.json()
    const lead: LeadRecord = payload.record

    if (!lead?.email) return new Response('no email', { status: 200 })

    let subject: string
    let html: string

    if (lead.lead_type === 'brochure_download') {
      const brochureUrl = getBrochureUrl(lead.source_page)
      ;({ subject, html } = brochureUrl ? brochureEmail(lead, brochureUrl) : genericEmail(lead))
    } else if (lead.lead_type === 'consultation') {
      ;({ subject, html } = consultationEmail(lead))
    } else {
      ;({ subject, html } = genericEmail(lead))
    }

    const res = await sendEmail(lead.email, subject, html)

    if (!res.ok) {
      const err = await res.text()
      console.error('Customer.io error', res.status, err)
      return new Response(`cio error ${res.status}: ${err}`, { status: 500 })
    }

    // Notify the team too — best-effort, doesn't fail the user's confirmation email.
    const { subject: teamSubject, html: teamHtml } = internalNotifyEmail(lead)
    const teamRes = await sendEmail(TEAM_EMAIL, teamSubject, teamHtml)
    const teamBody = await teamRes.text()
    // log the body even on 200 — CIO returns 200 for accepted-but-suppressed sends too
    console.log('Team notify response', teamRes.status, teamBody)

    return new Response('ok', { status: 200 })
  } catch (e) {
    console.error('edge fn error', e)
    return new Response('error', { status: 500 })
  }
})
