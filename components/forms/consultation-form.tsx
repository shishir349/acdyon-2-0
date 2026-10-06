'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { CalendarCheck, ChevronDown, Search } from 'lucide-react'
import { submitConsultationRequest } from '@/lib/supabase'
import type { ConsultationData } from '@/lib/types/forms'

/* ── Country list ─────────────────────────────────────────────── */
const COUNTRIES = [
  'United Arab Emirates', 'United Kingdom', 'United States', 'India', 'Saudi Arabia',
  'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Nigeria', 'South Africa', 'Kenya',
  'Ghana', 'Egypt', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Philippines',
  'Malaysia', 'Singapore', 'Indonesia', 'Australia', 'Canada', 'Germany',
  'France', 'Switzerland', 'Netherlands', 'Ireland', 'Spain', 'Italy',
  'Turkey', 'Jordan', 'Lebanon', 'Iraq', 'Brazil', 'Mexico', 'China',
  'Japan', 'South Korea', 'Thailand', 'Vietnam', 'New Zealand', 'Sweden',
  'Norway', 'Denmark', 'Finland', 'Belgium', 'Austria', 'Portugal', 'Poland',
  'Czech Republic', 'Romania', 'Hungary', 'Greece', 'Russia', 'Ukraine',
  'Kazakhstan', 'Uzbekistan', 'Morocco', 'Tunisia', 'Algeria', 'Tanzania',
  'Uganda', 'Ethiopia', 'Rwanda', 'Cameroon', 'Ivory Coast', 'Senegal',
  'Nepal', 'Myanmar', 'Cambodia', 'Afghanistan', 'Iran', 'Israel',
  'Colombia', 'Argentina', 'Chile', 'Peru', 'Venezuela', 'Ecuador',
  'Costa Rica', 'Panama', 'Jamaica', 'Trinidad and Tobago', 'Bermuda',
  'Fiji', 'Papua New Guinea', 'Mauritius', 'Maldives', 'Botswana',
  'Namibia', 'Zimbabwe', 'Zambia', 'Mozambique', 'Madagascar',
  'Other',
]

const AREA_OPTIONS = [
  'Doctoral Programs (DBA / PhD)',
  'Honorary Doctorate',
  'AI & Technology Programs',
  'Executive Certifications',
  'Corporate Training',
  'Not Sure Yet',
]

/* ── Searchable Country Dropdown ──────────────────────────────── */
function CountryDropdown({
  value,
  onChange,
}: {
  value: string
  onChange: (country: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = search
    ? COUNTRIES.filter((c) => c.toLowerCase().includes(search.toLowerCase()))
    : COUNTRIES

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const select = useCallback(
    (country: string) => {
      onChange(country)
      setOpen(false)
      setSearch('')
    },
    [onChange],
  )

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v)
          setTimeout(() => inputRef.current?.focus(), 50)
        }}
        className="flex h-12 w-full items-center justify-between rounded-[8px] border border-slate-200 px-4 text-left text-sm outline-none transition focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900"
      >
        <span className={value ? 'text-slate-950 dark:text-white' : 'text-slate-400'}>
          {value || 'Select country'}
        </span>
        <ChevronDown className={`h-4 w-4 text-slate-400 transition ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-64 overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {/* Search input */}
          <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2 dark:border-slate-800">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="h-8 w-full text-sm outline-none placeholder:text-slate-400 dark:bg-slate-900 dark:text-white"
              autoComplete="off"
            />
          </div>
          {/* Options list */}
          <div className="max-h-48 overflow-y-auto overscroll-contain">
            {filtered.length === 0 ? (
              <div className="px-4 py-3 text-sm text-slate-400">No countries found</div>
            ) : (
              filtered.map((country) => (
                <button
                  key={country}
                  type="button"
                  onClick={() => select(country)}
                  className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition hover:bg-[#F8FAFC] dark:hover:bg-slate-800 ${
                    value === country ? 'bg-[#1E40FF]/5 font-semibold text-[#1E40FF]' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {country}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Main Form ────────────────────────────────────────────────── */
interface ConsultationFormProps {
  sourcePage?: string
}

export function ConsultationForm({ sourcePage }: ConsultationFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState<ConsultationData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    areaOfInterest: 'Doctoral Programs (DBA / PhD)',
    goals: '',
    sourcePage: sourcePage || 'book-consultation',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

    const result = await submitConsultationRequest(formData)

    if (result.success) {
      router.push('/thank-you')
    } else {
      setError(result.message)
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[8px] border border-slate-200 bg-white p-6 luxury-shadow dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#1E40FF] text-white">
          <CalendarCheck className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-950 dark:text-white">Consultation Request</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Tell us about your goals and we&apos;ll guide you forward.</p>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-[8px] border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400">
          {error}
        </div>
      )}

<div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Full name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
            placeholder="Full name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Email address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
            placeholder="Email address"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Phone number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 rounded-[8px] border border-slate-200 px-4 outline-none transition focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
            placeholder="Phone number"
            required
          />
        </label>
        <div className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Country
          <CountryDropdown
            value={formData.country}
            onChange={(country) => {
              setFormData((prev) => ({ ...prev, country }))
              setError('')
            }}
          />
          {/* Hidden input for form validation */}
          <input type="hidden" name="country" value={formData.country} required />
        </div>
      </div>

      <div className="relative mt-4 grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        Area of interest
        <select
          name="areaOfInterest"
          value={formData.areaOfInterest}
          onChange={handleChange}
          className="h-12 w-full appearance-none rounded-[8px] border border-slate-200 bg-white px-4 pr-10 text-sm outline-none transition focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          {AREA_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 text-slate-400" />
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        Goals
        <textarea
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          className="min-h-32 rounded-[8px] border border-slate-200 p-4 outline-none transition focus:border-[#1E40FF] dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
          placeholder="Tell us what you want to achieve."
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full inline-flex h-12 items-center justify-center rounded-full bg-[#1E40FF] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all duration-300 hover:bg-[#1937dd] disabled:bg-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-700"
      >
        {loading ? 'Submitting...' : 'Submit Consultation Request'}
      </button>
    </form>
  )
}
