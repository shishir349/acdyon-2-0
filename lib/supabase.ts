import { createClient } from '@supabase/supabase-js'
import type { ContactFormData, ConsultationData, LeadData, SubmissionResult } from './types/forms'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Debug logging
if (typeof window !== 'undefined') {
  console.log('🔍 Supabase Client Init - Environment Variables:')
  console.log('URL present:', !!supabaseUrl, supabaseUrl ? `${supabaseUrl.substring(0, 50)}...` : 'MISSING')
  console.log('Key present:', !!supabaseKey, supabaseKey ? `${supabaseKey.substring(0, 50)}...` : 'MISSING')

  if (supabaseKey) {
    const parts = supabaseKey.split('.')
    console.log('Key format: JWT with', parts.length, 'parts (expected 3)')
    if (parts.length === 3) {
      try {
        const payload = JSON.parse(atob(parts[1]))
        console.log('Key payload:', payload)
        console.log('Key exp timestamp:', payload.exp, new Date(payload.exp * 1000).toISOString())
      } catch (e) {
        console.log('Could not decode key payload')
      }
    }
  }
}

// Create client - will be ready when env vars are available
let supabaseInstance: ReturnType<typeof createClient> | null = null

export const getSupabase = () => {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    )
  }

  if (!supabaseInstance) {
    console.log('🔧 Creating Supabase client with:', {
      url: supabaseUrl,
      keyLength: supabaseKey.length,
    })
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

// Extract UTM parameters from URL
export const extractUTMParams = (): Record<string, string | null> => {
  if (typeof window === 'undefined') {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
    }
  }

  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_term: params.get('utm_term'),
    utm_content: params.get('utm_content'),
  }
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
          source_form: leadData.source_form,
          visitor_country: leadData.visitor_country || null,
          lead_source: leadData.lead_source || null,
          utm_source: leadData.utm_source || null,
          utm_medium: leadData.utm_medium || null,
          utm_campaign: leadData.utm_campaign || null,
          utm_term: leadData.utm_term || null,
          utm_content: leadData.utm_content || null,
          metadata: leadData.metadata,
          status: 'pending',
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

  try {
    const supabase = getSupabase() as any

    // Insert into contact_submissions table
    const { data: insertedData, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          country: data.country,
          area_of_interest: data.areaOfInterest,
          goals: data.goals,
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
    const utmParams = extractUTMParams()
    const leadResult = await createWebsiteLead({
      lead_type: 'contact',
      email: data.email,
      name: data.fullName,
      source_page: data.sourcePage || 'contact',
      source_form: 'contact_form',
      visitor_country: data.country,
      lead_source: 'contact_page',
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_term: utmParams.utm_term,
      utm_content: utmParams.utm_content,
      metadata: {
        fullName: data.fullName,
        phone: data.phone,
        country: data.country,
        areaOfInterest: data.areaOfInterest,
        goals: data.goals,
      },
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

    console.log('FULL RESPONSE consultation_requests', { error })

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

    console.log('FULL RESPONSE website_leads', { error: leadError })

    return {
      success: true,
      message:
        'Thank you for your consultation request! Our team will contact you within 24 hours.',
    }
  } catch (error) {
    console.log('EXCEPTION', error)
    return {
      success: false,
      message:
        'An error occurred while submitting your request. Please try again.',
    }
  }
}
