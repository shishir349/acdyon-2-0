import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { blogPosts } from '@/lib/data/blogs'
import { FinalCTA } from '@/components/sections/final-cta'
import { CTAButton } from '@/components/ui/button'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: 'Blog | AcdyOn' }
  return {
    title: `${post.title} | AcdyOn`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="bg-white py-40 text-center dark:bg-slate-950">
        <h1 className="font-display text-4xl text-slate-950 dark:text-white">Post not found</h1>
        <Link href="/blogs" className="mt-6 inline-block text-sm text-[#1E40FF] hover:underline">
          Back to Blogs
        </Link>
      </main>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff,#f8fafc_50%,#eef4ff)] dark:bg-[linear-gradient(135deg,#0a1120,#0f172a_50%,#0b1330)] pb-16 pt-36">
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-[#1E40FF]/10 blur-3xl" />
        <div className="container-premium relative max-w-4xl">
          <Link href="/blogs" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-[#1E40FF] dark:text-slate-400">
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Link>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">{post.category}</p>
          <h1 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl dark:text-white">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-5 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="container-premium max-w-3xl">
          <article className="space-y-5">
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={i} className="mt-10 font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={i} className="text-base font-semibold text-slate-950 dark:text-white">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                )
              }
              // Handle paragraphs with bold inline
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)
              return (
                <p key={i} className="text-base leading-8 text-slate-600 dark:text-slate-300">
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j} className="font-semibold text-slate-950 dark:text-white">{part.replace(/\*\*/g, '')}</strong>
                    }
                    return <span key={j}>{part}</span>
                  })}
                </p>
              )
            })}
          </article>

          {/* CTA */}
          {post.cta && (
            <div className="mt-14 rounded-[8px] border border-slate-200 bg-[#F8FAFC] p-8 text-center dark:bg-slate-900/60 dark:border-slate-800">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1E40FF]">Next Step</p>
              <p className="mb-5 text-lg font-semibold text-slate-950 dark:text-white">Ready to take action?</p>
              <CTAButton href={post.cta.href}>{post.cta.label}</CTAButton>
            </div>
          )}

          {/* Related Posts */}
          <div className="mt-16 border-t border-slate-200 pt-12 dark:border-slate-800">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-slate-400">More Articles</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blogs/${related.slug}`}
                    className="rounded-[8px] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#1E40FF]/30 hover:shadow-md dark:bg-slate-950 dark:border-slate-800"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E40FF]">{related.category}</p>
                    <h4 className="mt-2 text-sm font-semibold leading-snug text-slate-950 dark:text-white">{related.title}</h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  )
}
