import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { blogPosts } from "@/lib/data/blogs";

export const metadata: Metadata = {
  title: "Blog | AcdyOn",
  description: "Insights on executive education, AI careers, cybersecurity, doctoral pathways, and global academic recognition from AcdyOn.",
};

export default function BlogsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Ideas for leaders navigating education, AI, and recognition"
        description="Expert perspectives on executive learning, cybersecurity careers, AI automation, doctoral pathways, and global credibility."
      />
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group flex flex-col rounded-[8px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1E40FF]/30 hover:shadow-lg dark:bg-slate-950 dark:border-slate-800"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">{blog.category}</p>
              <h2 className="mt-4 flex-1 text-xl font-semibold leading-tight text-slate-950 group-hover:text-[#1E40FF] transition-colors dark:text-white">
                {blog.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{blog.excerpt}</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5" />
                  {blog.readTime}
                </span>
                <span className="text-xs font-semibold text-[#1E40FF] opacity-0 transition group-hover:opacity-100">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
