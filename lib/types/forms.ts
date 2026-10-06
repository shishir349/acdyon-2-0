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

export interface EventRSVPData {
  fullName: string
  email: string
  phone: string
  country: string
  programme: string
  guestCount: number
  eventSlug: string
  eventName: string
  sourcePage?: string
}

export interface ScholarshipLeadData {
  fullName: string
  email: string
  phone: string
  country: string
  programme: string
  university: string
  netFee: number
  discountPct: number
  sourcePage?: string
}

export interface BrochureLeadData {
  fullName: string
  email: string
  phone: string
  country: string
  programmeName: string
  sourcePage?: string
}

export interface RegistrationData {
  fullName: string
  email: string
  phone?: string
  country: string
  qualification: string
  experience: string
  programme: string
  linkedin?: string
  subjectArea: string
  purpose?: string
  resume?: File
}

export interface LeadData {
  lead_type: 'contact' | 'consultation' | 'event_rsvp' | 'scholarship_calculator' | 'brochure_download' | 'registration'
  email: string
  name: string
  source_page: string
  phone?: string
  country?: string
  program_type?: string
  status: string
}

export interface SubmissionResult {
  success: boolean
  message: string
  data?: any
}
