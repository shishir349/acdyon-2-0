"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import {
  CheckCircle2, Sparkles, Users2, GraduationCap, FileText, ChevronDown, ChevronRight,
  Award, CalendarClock, Linkedin, Building2, ChevronDown as ChevronDownIcon,
  TrendingUp, Users, Briefcase, Rocket, Video, Landmark, Trophy, Layers, BookOpen, ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Carousel } from '@/components/ui/carousel'
import { Reveal } from '@/components/ui/reveal'
import { BrochureDownloadButton } from '@/components/forms/brochure-download-button'
import type { UpgradCourse, UpgradMentor } from '@/lib/data/upgrad-courses'

const BASE = '/doctoral-programs/upgrad'

// ponytail: real pixel size of who_is_this_program_for.webp (4 photos side by side).
// Only sprite in use right now — recompute these if a differently-sized sprite is added later.
const SPRITE_W = 1024
const SPRITE_H = 299

// ponytail: keyword match over the fixed 4-topic whySection copy, no per-entry icon field needed.
function whySectionIcon(heading: string) {
  const h = heading.toLowerCase()
  if (h.includes('demand') || h.includes('grow') || h.includes('skyrocket')) return TrendingUp
  if (h.includes('who should') || h.includes('pursue')) return Users
  if (h.includes('career') || h.includes('impact')) return Briefcase
  if (h.includes('apart') || h.includes('unique') || h.includes('sets')) return Rocket
  return Sparkles
}

// ponytail: keyword match over the highlights string[], no per-entry icon field needed.
function highlightIcon(text: string) {
  const h = text.toLowerCase()
  if (h.includes('session') || h.includes('faculty') || h.includes('practising') || h.includes('practicing')) return Video
  if (h.includes('alumni') || h.includes('certificat')) return GraduationCap
  if (h.includes('workshop') || h.includes('campus')) return Landmark
  if (h.includes('dossier') || h.includes('only such') || h.includes('unique')) return Trophy
  if (h.includes('module')) return Layers
  if (h.includes('cohort') || h.includes('network') || h.includes('peer')) return Users2
  if (h.includes('book')) return BookOpen
  if (h.includes('teach')) return GraduationCap
  if (h.includes('prototype') || h.includes('pilot') || h.includes('no-code')) return Layers
  if (h.includes('protect') || h.includes('ip')) return ShieldCheck
  if (h.includes('pitch') || h.includes('vc') || h.includes('chequebook')) return Rocket
  if (h.includes('accredit')) return Award
  return CheckCircle2
}

// ponytail: shared card renderer so mentors/faculty carousels don't duplicate this markup.
function renderMentorCard(mentor: UpgradMentor, expandedBios: Set<string>, toggleBio: (name: string) => void, imageStyle: 'rect' | 'circle' = 'rect') {
  const expanded = expandedBios.has(mentor.name)
  const photo = mentor.photoUrl ? (
    <Image src={mentor.photoUrl} alt={mentor.name} fill className={imageStyle === 'circle' ? 'object-cover' : 'object-contain'} unoptimized />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-[#1E40FF]/10">
      <GraduationCap className={imageStyle === 'circle' ? 'h-6 w-6 text-[#1E40FF]' : 'h-10 w-10 text-[#1E40FF]'} />
    </div>
  )

  if (imageStyle === 'circle') {
    return (
      <div key={mentor.name} className="flex h-full flex-col rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
        <div className="flex items-start gap-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-900">{photo}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-950 dark:text-white">{mentor.name}</h3>
              {mentor.linkedinUrl && (
                <a href={mentor.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${mentor.name} profile`} className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-slate-500 transition hover:border-[#1E40FF] hover:text-[#1E40FF] dark:border-slate-700">
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{mentor.role}</p>
            <p className="text-sm font-medium text-[#1E40FF]">{mentor.institute}</p>
          </div>
        </div>
        {mentor.bio && (
          <>
            <p className={`mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 ${expanded ? '' : 'line-clamp-3'}`}>
              {mentor.bio}
            </p>
            <button
              type="button"
              onClick={() => toggleBio(mentor.name)}
              className="mt-2 inline-flex items-center gap-1 self-start text-xs font-semibold text-[#1E40FF]"
            >
              {expanded ? 'Show less' : 'Show more'}
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </>
        )}
      </div>
    )
  }

  return (
    <div key={mentor.name} className="flex h-full flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
      {/* Full photo, never cropped — object-contain on a neutral backdrop so nothing gets cut off at the sides */}
      <div className="relative w-full bg-slate-100 dark:bg-slate-900" style={{ aspectRatio: '16 / 10' }}>
        {photo}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-slate-950 dark:text-white">{mentor.name}</h3>
          {mentor.linkedinUrl && (
            <a href={mentor.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${mentor.name} profile`} className="flex shrink-0 items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-slate-500 transition hover:border-[#1E40FF] hover:text-[#1E40FF] dark:border-slate-700">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{mentor.role}</p>
        <p className="text-sm font-medium text-[#1E40FF]">{mentor.institute}</p>
        {mentor.bio && (
          <>
            <p className={`mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300 ${expanded ? '' : 'line-clamp-3'}`}>
              {mentor.bio}
            </p>
            <button
              type="button"
              onClick={() => toggleBio(mentor.name)}
              className="mt-2 inline-flex items-center gap-1 self-start text-xs font-semibold text-[#1E40FF]"
            >
              {expanded ? 'Show less' : 'Show more'}
              <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function CTAButtons({ course, variant = 'default' }: { course: UpgradCourse; variant?: 'default' | 'compact' }) {
  const primary = 'inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(30,64,255,0.22)] transition-all hover:bg-[#1937dd]'
  const secondary = 'inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800'
  return (
    <div className={variant === 'compact' ? 'flex flex-col gap-3 sm:flex-row sm:justify-center' : 'flex flex-col gap-3 sm:flex-row'}>
      <Link href="/book-consultation" className={primary}>Apply Now</Link>
      {course.syllabusUrl ? (
        <BrochureDownloadButton programmeName={`${course.name} — Syllabus`} fileUrl={course.syllabusUrl} sourcePage={`${BASE}/${course.slug}`} className={secondary}>
          Download Syllabus
        </BrochureDownloadButton>
      ) : (
        <Link href="/book-consultation" className={secondary}>Enquire Now</Link>
      )}
    </div>
  )
}

export function UpgradCoursePage({ course }: { course: UpgradCourse }) {
  const [openModule, setOpenModule] = useState(course.curriculum?.length ? 'module-0' : undefined)
  const [expandedBios, setExpandedBios] = useState<Set<string>>(new Set())
  const toggleBio = (name: string) =>
    setExpandedBios((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })

  return (
    <main>
      {/* Hero — brand gradient, stats, dual CTA */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] dark:bg-[linear-gradient(135deg,#0a1120,#0f172a_50%,#0b1330)] pb-20 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/10 blur-3xl" />
        <div className="absolute left-[-8%] bottom-[-10%] h-72 w-72 rounded-full bg-[#22d3ee]/10 blur-3xl" />
        <div className="container-premium relative">
          <div className="animate-hero-left mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#B8912F]">AcdyOn × upGrad</span>
          </div>
          <p className="animate-hero-left mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">
            {course.university} · {course.eyebrow}
          </p>
          <h1 className="animate-hero-left max-w-4xl font-display text-4xl leading-tight text-slate-950 sm:text-5xl md:text-6xl dark:text-white">
            {course.name}
          </h1>
          <p className="animate-hero-left mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{course.tagline}</p>

          {(course.duration || course.fee || course.seatBlock || course.admissionDeadline) && (
            <div className="animate-hero-right mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-[1fr_1.7fr_1fr_1fr]">
              {[
                course.duration && { label: 'Duration', value: course.duration },
                course.fee && { label: 'Programme Fee', value: course.fee },
                course.seatBlock && { label: 'Reserve Seat', value: course.seatBlock },
                course.admissionDeadline && { label: 'Admission Deadline', value: course.admissionDeadline },
              ].filter(Boolean).map((item) => {
                const it = item as { label: string; value: string }
                return (
                  <div key={it.label} className="rounded-[8px] border border-slate-200 bg-white/70 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
                    <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {it.label === 'Admission Deadline' && <CalendarClock className="h-3 w-3" />}
                      {it.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-950 dark:text-white">{it.value}</p>
                  </div>
                )
              })}
            </div>
          )}

          <div className="animate-hero-right mt-9">
            <CTAButtons course={course} />
          </div>
        </div>
      </section>

      {/* Certificate */}
      {course.certificate ? (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow="Credential" title="Your Dual-Institute Certificate" description={course.certificate.note} />
              <div className="mx-auto mt-14 grid max-w-4xl gap-8 overflow-hidden rounded-[8px] border-2 border-[#D4AF37]/40 bg-[linear-gradient(135deg,#fffdf8,#fbf5e6)] p-8 shadow-lg dark:border-[#D4AF37]/30 dark:bg-[linear-gradient(135deg,#1a1508,#241c0d)] md:grid-cols-2 md:items-center md:p-10">
                <div className="text-center md:text-left">
                  <Award className="mx-auto mb-4 h-10 w-10 text-[#D4AF37] md:mx-0" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8912F]">Certificate of Completion</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950 dark:text-white">{course.certificate.title}</h3>
                  <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 md:justify-start">
                    {course.certificate.issuers.map((issuer, i) => (
                      <span key={issuer} className="flex items-center gap-2">
                        {i > 0 && <span className="text-[#D4AF37]">×</span>}
                        {issuer}
                      </span>
                    ))}
                  </p>
                </div>
                {course.certificate.imageUrl && (
                  <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-[8px] bg-white shadow-md">
                    <Image src={course.certificate.imageUrl} alt={`${course.certificate.title} certificate`} fill className="object-contain p-3" unoptimized />
                  </div>
                )}
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Accreditations — real logo when supplied, icon+text fallback otherwise */}
      {course.accreditations?.length ? (
        <Reveal>
          <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
            <div className="container-premium">
              <SectionHeading eyebrow="Global recognition" title="Accreditation & Global Recognition" description="Independently recognised by leading accreditation bodies worldwide." />
              <div className="mt-14 grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {course.accreditations.map((acc) => (
                  <div key={acc.name} className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#D4AF37]/10">
                      {acc.logoUrl ? (
                        <div className="relative h-full w-full">
                          <Image src={acc.logoUrl} alt={acc.name} fill className="object-contain p-1" unoptimized />
                        </div>
                      ) : (
                        <Award className="h-6 w-6 text-[#D4AF37]" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-950 dark:text-white">{acc.name}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{acc.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Highlights */}
      {course.highlights?.length ? (
        <Reveal>
          <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
            <div className="container-premium">
              <SectionHeading eyebrow="Why this programme" title="Key Highlights" description="What sets this dual-school executive programme apart." />
              <div className="mt-14 grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {course.highlights.map((h) => {
                  const Icon = highlightIcon(h)
                  return (
                    <div key={h} className="flex gap-4 rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E40FF]/10">
                        <Icon className="h-6 w-6 text-[#1E40FF]" />
                      </div>
                      <p className="min-w-0 text-sm font-medium text-slate-700 dark:text-slate-200">{h}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Who is this for — arrow carousel with imagery */}
      {course.audience?.length ? (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow="Who is this for" title="Designed For Rising & Established Leaders" description="Strategic, AI-ready, board-facing capabilities to accelerate enterprise impact." />
              <div className="mx-auto mt-14 max-w-4xl">
                <Carousel
                  items={course.audience.map((a, i) =>
                    course.audienceImageStyle === 'rect' ? (
                      <div key={a.role} className="flex h-80 flex-col overflow-hidden rounded-[8px] border border-slate-200 dark:border-slate-800 sm:h-96">
                        {/* Rectangular professional/workspace image — exactly half the card, cropped via object-cover, never stretched */}
                        <div className="relative h-1/2 w-full">
                          {a.imageUrl ? (
                            <Image src={a.imageUrl} alt={a.role} fill className="object-cover" unoptimized />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-[#1E40FF]/10">
                              <Users2 className="h-10 w-10 text-[#1E40FF]" />
                            </div>
                          )}
                        </div>
                        <div className="flex h-1/2 flex-col justify-center gap-2 overflow-hidden bg-white p-5 pb-6 dark:bg-slate-950">
                          <h3 className="font-semibold text-slate-950 dark:text-white">{a.role}</h3>
                          <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{a.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div key={a.role} className="flex h-full flex-col gap-4 rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                        {/* Avatar — same footprint as the faculty photos, never a full-width banner */}
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#1E40FF]/10">
                          {course.audienceSpriteUrl ? (
                            <Image
                              src={course.audienceSpriteUrl}
                              alt={a.role}
                              width={SPRITE_W}
                              height={SPRITE_H}
                              unoptimized
                              className="absolute max-w-none"
                              style={{ height: '100%', width: 'auto', left: -(i * (64 * SPRITE_W) / course.audience!.length / SPRITE_H) }}
                            />
                          ) : a.imageUrl ? (
                            <Image src={a.imageUrl} alt={a.role} fill className="object-cover" unoptimized />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <Users2 className="h-6 w-6 text-[#1E40FF]" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-950 dark:text-white">{a.role}</h3>
                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a.description}</p>
                        </div>
                      </div>
                    )
                  )}
                />
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* 4 steps to become an AI-first CTO — arrow diagram desktop, accordion mobile */}
      {course.fourSteps?.length ? (
        <Reveal>
          <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
            <div className="container-premium">
              <SectionHeading eyebrow="Learning path" title={`${course.fourSteps.length} Steps to Becoming an AI-First CTO`} description="From deep-tech mastery to boardroom-ready leadership." />
              {/* Desktop: arrow diagram */}
              <div className="mt-14 hidden gap-3 md:grid" style={{ gridTemplateColumns: `repeat(${course.fourSteps.length}, 1fr)` }}>
                {course.fourSteps.map((step, i) => (
                  <div key={step.title} className="relative">
                    <div className="h-full rounded-[8px] border border-slate-200 bg-white p-6 dark:bg-slate-950 dark:border-slate-800">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#1E40FF] text-sm font-bold text-white">{i + 1}</div>
                      <h3 className="font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.desc}</p>
                    </div>
                    {i < course.fourSteps!.length - 1 && (
                      <ChevronRight className="absolute right-[-18px] top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-[#1E40FF]" />
                    )}
                  </div>
                ))}
              </div>
              {/* Mobile: accordion */}
              <div className="mt-14 md:hidden">
                <Accordion.Root type="single" collapsible className="space-y-3">
                  {course.fourSteps.map((step, i) => (
                    <Accordion.Item key={step.title} value={`step-${i}`} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
                      <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 px-5 py-4 text-left">
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1E40FF] text-xs font-bold text-white">{i + 1}</span>
                          <span className="font-semibold text-slate-950 dark:text-white">{step.title}</span>
                        </span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                      <Accordion.Content className="border-t border-slate-100 px-5 py-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
                        {step.desc}
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Curriculum — left timeline of dots + accordion, first module open by default */}
      {course.curriculum?.length ? (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow="What you will learn" title="Programme Curriculum" description="Master the intersection of technology, AI, and business strategy." />
              <div className="mx-auto mt-14 max-w-4xl">
                <Accordion.Root type="single" collapsible value={openModule} onValueChange={setOpenModule} className="space-y-4">
                  {course.curriculum.map((m, i) => (
                    <Accordion.Item key={m.title} value={`module-${i}`} className="flex gap-4 sm:gap-6">
                      {/* Dot + connecting line, adjacent to this module's own card */}
                      <div className="flex w-3 shrink-0 flex-col items-center pt-6">
                        <div
                          className={`z-10 h-3 w-3 shrink-0 rounded-full border-2 transition-all duration-300 ${
                            openModule === `module-${i}` ? 'scale-125 border-[#1E40FF] bg-[#1E40FF]' : 'border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-950'
                          }`}
                        />
                        {i < course.curriculum!.length - 1 && <div className="mt-1 w-px flex-1 bg-slate-200 dark:bg-slate-800" />}
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden rounded-[8px] border border-slate-200 bg-[#F8FAFC] dark:bg-slate-900/60 dark:border-slate-800">
                        <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 px-6 py-4 text-left">
                          <span className="min-w-0">
                            <span className="flex flex-wrap items-center gap-2">
                              {m.code && <span className="rounded-full bg-[#1E40FF]/10 px-3 py-1 text-xs font-bold text-[#1E40FF]">{m.code}</span>}
                              {m.weeks && <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{m.weeks}</span>}
                            </span>
                            <span className="mt-2 block font-semibold text-slate-950 dark:text-white">{m.title}</span>
                          </span>
                          <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Accordion.Trigger>
                        <Accordion.Content className="border-t border-slate-200 px-6 py-4 dark:border-slate-800">
                          {m.topics?.length ? (
                            <ul className="space-y-2">
                              {m.topics.map((t) => (
                                <li key={t} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1E40FF]" />
                                  <span>{t}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {m.deliverable && (
                            <p className="mt-3 inline-flex rounded-[6px] bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                              Deliverable · {m.deliverable}
                            </p>
                          )}
                        </Accordion.Content>
                      </div>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Faculty — show first 3, reveal rest, real photos + profile links */}
      {course.mentors?.length ? (
        <Reveal>
          <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
            <div className="container-premium">
              <SectionHeading eyebrow={course.mentorsEyebrow ?? "Mentors"} title={course.mentorsTitle ?? "Learn From the Best"} description={course.mentorsDescription ?? "Faculty and academic leaders from IIIT-Bangalore and IIM Udaipur."} />
              <div className="mx-auto mt-14 max-w-4xl">
                <Carousel items={course.mentors.map((mentor) => renderMentorCard(mentor, expandedBios, toggleBio, course.mentorsAvatarStyle ?? 'rect'))} />
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Separate faculty group — kept distinct from mentors so two groups (e.g. Program Architects vs Faculty) don't mix in one carousel */}
      {course.faculty?.length ? (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow={course.facultyEyebrow ?? "Faculty"} title={course.facultyTitle ?? "Meet the Faculty"} description={course.facultyDescription ?? "Academic leaders shaping the curriculum."} />
              <div className="mx-auto mt-14 max-w-4xl">
                <Carousel items={course.faculty.map((mentor) => renderMentorCard(mentor, expandedBios, toggleBio, course.mentorsAvatarStyle ?? 'rect'))} />
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Third faculty group — kept distinct from mentors/faculty so three groups (e.g. Instructors / Leadership Experts / Thesis Supervisors) don't mix in one carousel */}
      {course.thesisSupervisors?.length ? (
        <Reveal>
          <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
            <div className="container-premium">
              <SectionHeading eyebrow={course.thesisSupervisorsEyebrow ?? "Thesis Supervisors"} title={course.thesisSupervisorsTitle ?? "Meet the Thesis Supervisors"} description={course.thesisSupervisorsDescription ?? "Guiding your doctoral research."} />
              <div className="mx-auto mt-14 max-w-4xl">
                <Carousel items={course.thesisSupervisors.map((mentor) => renderMentorCard(mentor, expandedBios, toggleBio, course.mentorsAvatarStyle ?? 'rect'))} />
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Testimonials — alumni and learner profiles */}
      {course.testimonials?.length ? (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow={course.testimonialsEyebrow ?? "Alumni voices"} title={course.testimonialsTitle ?? "Hear From Our Learners"} description={course.testimonialsDescription ?? "Real professionals, real outcomes."} />
              <div className="mx-auto mt-14 max-w-4xl">
                <Carousel
                  items={course.testimonials.map((t) => (
                    <div key={t.name} className="flex h-full flex-col gap-4 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6 dark:bg-slate-900/60 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#1E40FF]/10">
                          {t.photoUrl ? (
                            <Image src={t.photoUrl} alt={t.name} fill className="object-cover" unoptimized />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <Users2 className="h-5 w-5 text-[#1E40FF]" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="truncate font-semibold text-slate-950 dark:text-white">{t.name}</h3>
                            {t.linkedinUrl && (
                              <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={t.name + " profile"} className="shrink-0 text-slate-400 transition hover:text-[#1E40FF]">
                                <Linkedin className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{t.quote}</p>
                    </div>
                  ))}
                />
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Case studies — arrow carousel, text + icon (no third-party logos) */}
      {course.caseStudies?.length ? (
        <Reveal>
          <section className="bg-[#0f172a] py-24">
            <div className="container-premium">
              <SectionHeading eyebrow="Enterprise impact" title="Case Studies That Define AI-First Leadership" description="Real challenges technology leaders are solving with AI at scale." variant="dark" />
              <div className="mx-auto mt-14 max-w-4xl">
                <Carousel
                  variant="dark"
                  items={course.caseStudies.map((cs) => (
                    <div key={cs.title} className="flex h-full flex-col rounded-[8px] border border-white/10 bg-white/5 p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-[#D4AF37]" />
                        <span className="text-xs font-bold uppercase tracking-wide text-[#D4AF37]">{cs.company}</span>
                      </div>
                      <h3 className="font-semibold text-white">{cs.title}</h3>
                      <p className="mt-2 text-sm text-slate-300">{cs.description}</p>
                    </div>
                  ))}
                />
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Participant batch profile */}
      {course.batchProfile?.length ? (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow="Cohort composition" title="Participant Batch Profile" description="Who you'll learn alongside in this cohort." />
              <div className="mt-14 grid gap-8 md:grid-cols-3">
                {course.batchProfile.map((group) => (
                  <div key={group.title} className="rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-6 dark:bg-slate-900/60 dark:border-slate-800">
                    <h3 className="mb-4 font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
                          <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                          <span className="font-semibold text-[#1E40FF]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Mid-page CTA strip */}
      <section className="border-y border-slate-200 bg-[#F8FAFC] py-12 dark:bg-slate-900/60 dark:border-slate-800">
        <div className="container-premium">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">Ready to take the next step?</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Download the full brochure or apply to reserve your seat.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full bg-[#1E40FF] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1937dd]">
                Apply Now
              </Link>
              {course.brochureUrl ? (
                <BrochureDownloadButton programmeName={`${course.name} — Brochure`} fileUrl={course.brochureUrl} sourcePage={`${BASE}/${course.slug}`} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800">
                  Download Brochure
                </BrochureDownloadButton>
              ) : (
                <Link href="/book-consultation" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:shadow-md dark:bg-slate-950 dark:text-white dark:border-slate-800">
                  Enquire Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply (renamed from "Who can apply") */}
      {(course.eligibility || course.admissionSteps?.length) && (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow="Getting started" title="How to Apply" description={course.eligibility ?? ''} />
              {course.admissionSteps?.length ? (
                <div className="mt-14 grid gap-4 sm:grid-cols-3">
                  {course.admissionSteps.map((s, i) => (
                    <div key={s.title} className="rounded-[8px] border-l-4 border-slate-200 bg-[#F8FAFC] p-6 dark:bg-slate-900/60 dark:border-slate-800" style={{ borderLeftColor: '#1E40FF' }}>
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E40FF] text-sm font-semibold text-white">{i + 1}</div>
                      <h3 className="font-semibold text-slate-950 dark:text-white">{s.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        </Reveal>
      )}

      {/* Why this programme matters */}
      {course.whySection ? (
        <Reveal>
          <section className="bg-[#F8FAFC] py-24 dark:bg-slate-900/60">
            <div className="container-premium">
              <SectionHeading eyebrow="Deep dive" title={course.whySection.title} />
              <div className="mx-auto mt-14 max-w-3xl space-y-8">
                {course.whySection.sections.map((s) => {
                  const Icon = whySectionIcon(s.heading)
                  return (
                    <div key={s.heading} className="flex gap-4 border-l-4 border-[#1E40FF] pl-6">
                      <Icon className="mt-1 h-6 w-6 shrink-0 text-[#1E40FF]" />
                      <div>
                        <h3 className="font-semibold text-slate-950 dark:text-white">{s.heading}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{s.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* FAQs */}
      {course.faqs?.length ? (
        <Reveal>
          <section className="bg-white py-24 dark:bg-slate-950">
            <div className="container-premium">
              <SectionHeading eyebrow="Common questions" title="Frequently Asked Questions" description="Everything you need to know before applying." />
              <div className="mx-auto mt-14 max-w-3xl">
                <Accordion.Root type="single" collapsible className="space-y-4">
                  {course.faqs.map((faq, i) => (
                    <Accordion.Item key={faq.q} value={`faq-${i}`} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
                      <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 px-6 py-4 text-left">
                        <span className="font-semibold text-slate-950 dark:text-white">{faq.q}</span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                      <Accordion.Content className="border-t border-slate-200 px-6 py-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">
                        {faq.a}
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </div>
          </section>
        </Reveal>
      ) : null}

      {/* Coming soon note for stubs */}
      {!course.confirmed && (
        <section className="bg-[#F8FAFC] py-16 dark:bg-slate-900/60">
          <div className="container-premium text-center">
            <FileText className="mx-auto mb-4 h-8 w-8 text-[#1E40FF]" />
            <p className="mx-auto max-w-xl text-slate-600 dark:text-slate-300">
              Full curriculum, mentors and fee details for this programme are being finalised. Book a consultation and our advisers will share everything you need.
            </p>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-[#0f172a] py-20">
        <div className="container-premium text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#22d3ee]">AcdyOn × upGrad</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to Advance Your Leadership?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Speak with an AcdyOn adviser for honest, personalised guidance on programme fit, eligibility, and your enrolment path.
          </p>
          <div className="mt-8">
            <CTAButtons course={course} variant="compact" />
          </div>
          <div className="mt-4">
            <Link href={BASE} className="text-sm font-semibold text-slate-300 underline-offset-4 hover:text-white hover:underline">
              Explore All Programmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
