import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { upgradCourses, getUpgradCourse } from '@/lib/data/upgrad-courses'
import { UpgradCoursePage } from '@/components/upgrad/course-page'

export function generateStaticParams() {
  return upgradCourses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const course = getUpgradCourse(slug)
  if (!course) return {}
  return {
    title: `${course.name} — ${course.university} | AcdyOn × upGrad`,
    description: course.tagline,
  }
}

export default async function UpgradCourseRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = getUpgradCourse(slug)
  if (!course) notFound()
  return <UpgradCoursePage course={course} />
}
