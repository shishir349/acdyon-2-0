import { createClient } from '@supabase/supabase-js'
import { pushToCrm } from './crm'
import type { ContactFormData, ConsultationData, EventRSVPData, ScholarshipLeadData, BrochureLeadData, RegistrationData, LeadData, SubmissionResult } from './types/forms'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create client - will be ready when env vars are available
let supabaseInstance: ReturnType<typeof createClient> | null = null

export const getSupabase = () => {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    )
  }

  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey)
  }

  return supabaseInstance
}

// Validation helpers
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s]?[(]?[0-9]{1,4}[)]?[-\s]?[0-9]{1,9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Create website lead record
async function createWebsiteLead(leadData: LeadData): Promise<SubmissionResult> {
  try {
    const supabase = getSupabase() as any

    const { error } = await supabase
      .from('website_leads')
      .insert([
        {
          lead_type: leadData.lead_type,
          email: leadData.email,
          name: leadData.name,
          source_page: leadData.source_page,
          phone: leadData.phone || null,
          country: leadData.country || null,
          program_type: leadData.program_type || null,
          status: leadData.status,
        },
      ])

    if (error) {
      console.error('Lead creation error:', error)
      return {
        success: false,
        message: 'Failed to create lead record. Please try again.',
      }
    }

    return { success: true, message: 'Lead recorded successfully' }
  } catch (error) {
    console.error('Lead creation exception:', error)
    return {
      success: false,
      message: 'An error occurred while recording your information.',
    }
  }
}

// Submit contact form
export async function submitContactForm(data: ContactFormData): Promise<SubmissionResult> {
  // Client-side validation
  if (!data.fullName.trim()) {
    return { success: false, message: 'Full name is required' }
  }
  if (!validateEmail(data.email)) {
    return { success: false, message: 'Please enter a valid email address' }
  }
  if (!validatePhone(data.phone)) {
    return { success: false, message: 'Please enter a valid phone number' }
  }
  if (!data.country.trim()) {
    return { success: false, message: 'Country is required' }
  }
  if (!data.goals.trim()) {
    return { success: false, message: 'Please tell us about your goals' }
  }

  pushToCrm({ formType: 'contact', fullName: data.fullName, email: data.email, phone: data.phone, country: data.country, message: data.goals, sourcePage: data.sourcePage, extra: { interest: data.areaOfInterest } })

  try {
    const supabase = getSupabase() as any

    // Insert into contact_submissions table
    const { data: insertedData, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          country: data.country,
          subject: data.areaOfInterest,
          message: data.goals,
          status: 'pending',
        },
      ])
      .select()

    if (error) {
      console.error('Contact submission error:', error)
      return {
        success: false,
        message: 'Failed to submit form. Please try again.',
      }
    }

    // Create lead record
    const leadResult = await createWebsiteLead({
      lead_type: 'contact',
      email: data.email,
      name: data.fullName,
      source_page: data.sourcePage || 'contact',
      phone: data.phone,
      country: data.country,
      program_type: data.areaOfInterest,
      status: 'pending',
    })

    if (!leadResult.success) {
      console.warn('Lead creation failed, but submission recorded:', leadResult.message)
    }

    return {
      success: true,
      message: 'Thank you for your submission! We will contact you soon.',
      data: insertedData,
    }
  } catch (error) {
    console.error('Contact submission exception:', error)
    return {
      success: false,
      message: 'An error occurred while submitting your form. Please try again.',
    }
  }
}

// Submit consultation request
export async function submitConsultationRequest(data: ConsultationData): Promise<SubmissionResult> {
  // Client-side validation
  if (!data.fullName.trim()) {
    return { success: false, message: 'Full name is required' }
  }
  if (!validateEmail(data.email)) {
    return { success: false, message: 'Please enter a valid email address' }
  }
  if (!validatePhone(data.phone)) {
    return { success: false, message: 'Please enter a valid phone number' }
  }
  if (!data.country.trim()) {
    return { success: false, message: 'Country is required' }
  }
  if (!data.goals.trim()) {
    return { success: false, message: 'Please tell us your goals' }
  }

  pushToCrm({ formType: 'consultation', fullName: data.fullName, email: data.email, phone: data.phone, country: data.country, message: data.goals, sourcePage: data.sourcePage, extra: { interest: data.areaOfInterest } })

  try {
    const supabase = getSupabase() as any

    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      country: data.country,
      program_type: data.areaOfInterest,
      message: data.goals,
      university_interest: null,
      preferred_time: null,
      source_page: data.sourcePage || 'book-consultation',
      status: 'new',
    }

    const { error } = await supabase
      .from('consultation_requests')
      .insert([payload])

    if (error) {
      return {
        success: false,
        message: `Failed to submit consultation request.`,
      }
    }

    const { error: leadError } = await supabase
      .from('website_leads')
      .insert([
        {
          lead_type: 'consultation',
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          country: data.country,
          program_type: data.areaOfInterest,
          source_page: data.sourcePage || 'book-consultation',
          status: 'new',
        },
      ])

    return {
      success: true,
      message:
        'Thank you for your consultation request! Our team will contact you within 24 hours.',
    }
  } catch (error) {
    return {
      success: false,
      message:
        'An error occurred while submitting your request. Please try again.',
    }
  }
}

// Submit event RSVP
export async function submitEventRSVP(data: EventRSVPData): Promise<SubmissionResult> {
  if (!data.fullName.trim()) {
    return { success: false, message: 'Full name is required' }
  }
  if (!validateEmail(data.email)) {
    return { success: false, message: 'Please enter a valid email address' }
  }
  if (!validatePhone(data.phone)) {
    return { success: false, message: 'Please enter a valid phone number' }
  }
  if (!data.country.trim()) {
    return { success: false, message: 'Country is required' }
  }

  try {
    const supabase = getSupabase() as any

    const { error } = await supabase.from('website_leads').insert([
      {
        lead_type: 'event_rsvp',
        email: data.email,
        name: data.fullName,
        source_page: data.sourcePage || 'resources/events',
        phone: data.phone,
        country: data.country,
        program_type: `${data.eventName} (${data.programme}, ${data.guestCount} guest${data.guestCount === 1 ? '' : 's'})`,
        status: 'pending',
      },
    ])

    if (error) {
      console.error('Event RSVP error:', error)
      return { success: false, message: 'Failed to submit RSVP. Please try again.' }
    }

    return {
      success: true,
      message: 'RSVP confirmed! We will send full event details to your email.',
    }
  } catch (error) {
    console.error('Event RSVP exception:', error)
    return { success: false, message: 'An error occurred while submitting your RSVP.' }
  }
}

// Submit scholarship calculator lead
export async function submitScholarshipLead(data: ScholarshipLeadData): Promise<SubmissionResult> {
  if (!data.fullName.trim()) {
    return { success: false, message: 'Full name is required' }
  }
  if (!validateEmail(data.email)) {
    return { success: false, message: 'Please enter a valid email address' }
  }
  if (!validatePhone(data.phone)) {
    return { success: false, message: 'Please enter a valid phone number' }
  }
  if (!data.country.trim()) {
    return { success: false, message: 'Country is required' }
  }

  try {
    const supabase = getSupabase() as any

    const { error } = await supabase.from('website_leads').insert([
      {
        lead_type: 'scholarship_calculator',
        email: data.email,
        name: data.fullName,
        source_page: data.sourcePage || 'scholarship-calculator',
        phone: data.phone,
        country: data.country,
        program_type: `${data.programme} @ ${data.university} — ${data.discountPct}% scholarship, net fee ${data.netFee}`,
        status: 'pending',
      },
    ])

    if (error) {
      console.error('Scholarship lead error:', error)
      return { success: false, message: 'Failed to save your details. Please try again.' }
    }

    return {
      success: true,
      message: 'Indicative scholarship revealed below. Our team will confirm eligibility shortly.',
    }
  } catch (error) {
    console.error('Scholarship lead exception:', error)
    return { success: false, message: 'An error occurred while saving your details.' }
  }
}

// Submit brochure download lead
export async function submitBrochureLead(data: BrochureLeadData): Promise<SubmissionResult> {
  if (!data.fullName.trim()) {
    return { success: false, message: 'Full name is required' }
  }
  if (!validateEmail(data.email)) {
    return { success: false, message: 'Please enter a valid email address' }
  }
  if (!validatePhone(data.phone)) {
    return { success: false, message: 'Please enter a valid phone number' }
  }
  if (!data.country.trim()) {
    return { success: false, message: 'Country is required' }
  }

  pushToCrm({ formType: 'brochure', fullName: data.fullName, email: data.email, phone: data.phone, country: data.country, brochure: data.programmeName, sourcePage: data.sourcePage })

  try {
    const supabase = getSupabase() as any

    const { error } = await supabase.from('website_leads').insert([
      {
        lead_type: 'brochure_download',
        email: data.email,
        name: data.fullName,
        source_page: data.sourcePage || 'brochure_download',
        phone: data.phone,
        country: data.country,
        program_type: data.programmeName,
        status: 'pending',
      },
    ])

    if (error) {
      console.error('Brochure lead error:', error)
      return { success: false, message: 'Failed to save your details. Please try again.' }
    }

    return {
      success: true,
      message: 'Thank you! Your brochure download is starting.',
    }
  } catch (error) {
    console.error('Brochure lead exception:', error)
    return { success: false, message: 'An error occurred while saving your details.' }
  }
}

// Programme registration (app/register). Saved before the redirect to the
// hosted Stripe/Razorpay payment link — those links return no signature we can
// verify, so payment is reconciled against the provider dashboard afterwards.
export async function submitRegistration(data: RegistrationData): Promise<SubmissionResult> {
  if (!data.fullName.trim()) {
    return { success: false, message: 'Full name is required' }
  }
  if (!validateEmail(data.email)) {
    return { success: false, message: 'Please enter a valid email address' }
  }
  if (data.phone && !validatePhone(data.phone)) {
    return { success: false, message: 'Please enter a valid phone number' }
  }
  if (!data.country.trim()) {
    return { success: false, message: 'Country is required' }
  }

  try {
    const supabase = getSupabase() as any

    // Optional resume: upload first so the row carries its URL. A failed upload
    // must not lose the application, so it only warns.
    let resumeUrl: string | null = null
    if (data.resume) {
      const path = `${Date.now()}-${data.email.replace(/[^a-z0-9]/gi, '_')}.pdf`
      const { error: upErr } = await supabase.storage
        .from('resumes')
        .upload(path, data.resume, { contentType: 'application/pdf', upsert: false })
      if (upErr) console.error('Resume upload error:', upErr)
      else resumeUrl = supabase.storage.from('resumes').getPublicUrl(path).data.publicUrl
    }

    const { error } = await supabase.from('registrations').insert([
      {
        full_name: data.fullName,
        email: data.email,
        phone: data.phone || null,
        country: data.country,
        qualification: data.qualification,
        experience: data.experience,
        programme: data.programme,
        linkedin: data.linkedin || null,
        subject_area: data.subjectArea,
        purpose: data.purpose?.trim() || null,
        resume_url: resumeUrl,
        status: 'awaiting_payment',
      },
    ])

    if (error) {
      console.error('Registration error:', error)
      return { success: false, message: 'Failed to save your details. Please try again.' }
    }

    return { success: true, message: 'Registration saved. Redirecting to payment.' }
  } catch (error) {
    console.error('Registration lead exception:', error)
    return { success: false, message: 'An error occurred while saving your details.' }
  }
}
