import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { blogs } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights on executive education, AI leadership, doctoral pathways, and global academic recognition.",
};

export default function BlogsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Ideas for leaders navigating education, AI, and recognition"
        description="Editorial perspectives on executive learning, future skills, academic advancement, and global credibility."
      />
      <section className="bg-white py-24">
        <div className="container-premium grid gap-5 md:grid-cols-3">
          {blogs.map((blog) => (
            <article key={blog.title} className="rounded-[8px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#1E40FF]/30">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">{blog.category}</p>
              <h2 className="mt-5 text-xl font-semibold leading-tight text-slate-950">{blog.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{blog.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
