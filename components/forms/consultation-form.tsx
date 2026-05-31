'use client'

import { useState } from 'react'
import { CalendarCheck } from 'lucide-react'
import { submitConsultationRequest } from '@/lib/supabase'
import type { ConsultationData } from '@/lib/types/forms'

interface ConsultationFormProps {
  sourcePage?: string
}

export function ConsultationForm({ sourcePage }: ConsultationFormProps) {
  const [formData, setFormData] = useState<ConsultationData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    areaOfInterest: 'Doctoral Programs',
    goals: '',
    sourcePage: sourcePage || 'book-consultation',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    const result = await submitConsultationRequest(formData)

    if (result.success) {
      setSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        areaOfInterest: 'Doctoral Programs',
        goals: '',
        sourcePage: sourcePage || 'book-consultation',
      })

      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } else {
      setError(result.message)
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[8px] border border-slate-200 bg-white p-6 luxury-shadow">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#1E40FF] text-white">
          <CalendarCheck className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Book a Consultation</h2>
          <p className="text-sm text-slate-500">Manual admissions guidance for Phase 1.</p>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-[8px] border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 rounded-[8px] border border-green-200 bg-green-50 p-3 text-sm text-green-600">
          Thank you! We'll contact you within 24 hours.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF]"
            placeholder="Full name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF]"
            placeholder="Email address"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF]"
            placeholder="Phone number"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Country
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF]"
            placeholder="Country"
            required
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        Area of interest
        <select
          name="areaOfInterest"
          value={formData.areaOfInterest}
          onChange={handleChange}
          className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF]"
        >
          <option>AI & Automation</option>
          <option>Doctoral Programs</option>
          <option>Honorary Recognition</option>
          <option>Executive Certifications</option>
          <option>Corporate Training</option>
        </select>
      </label>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        Goals
        <textarea
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          className="min-h-32 rounded-[8px] border border-slate-200 p-4 outline-none transition focus:border-[#1E40FF]"
          placeholder="Tell us what you want to achieve."
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full inline-flex h-12 items-center justify-center rounded-full bg-[#1E40FF] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all duration-300 hover:bg-[#1937dd] disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Submit Consultation Request'}
      </button>
    </form>
  )
}
