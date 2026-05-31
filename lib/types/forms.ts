export interface ContactFormData {
  fullName: string
  email: string
  phone: string
  country: string
  areaOfInterest: string
  goals: string
  sourcePage?: string
}

export interface ConsultationData extends ContactFormData {
  programme?: 'dba' | 'phd' | 'post-doctorate'
}

export interface LeadData {
  lead_type: 'contact' | 'consultation'
  email: string
  name: string
  source_page: string
  source_form: string
  visitor_country?: string
  lead_source?: string
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_term?: string | null
  utm_content?: string | null
  metadata: Record<string, any>
}

export interface SubmissionResult {
  success: boolean
  message: string
  data?: any
}
