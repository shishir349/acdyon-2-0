import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CTAButton } from "@/components/ui/button";
import { getUpcomingEvents, getPastEvents } from "@/lib/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join AcdyOn convocation ceremonies, webinars, open days, and information sessions on executive education, AI programs, and academic recognition.",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <main>
      <PageHero
        eyebrow="Events"
        title="Convocations, webinars, and information sessions"
        description="Join live sessions and ceremonies to meet partner universities, ask questions, and celebrate graduate milestones with the AcdyOn community."
      />

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="container-premium">
          <SectionHeading eyebrow="Upcoming" title="What's next" align="left" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {upcoming.length === 0 ? (
              <p className="text-slate-600 dark:text-slate-300">
                No upcoming events are scheduled right now. Register your interest below.
              </p>
            ) : (
              upcoming.map((event) => (
                <Link
                  key={event.slug}
                  href={`/resources/events/${event.slug}/`}
                  className="group overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 640px) 480px, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E40FF]">
                      {new Date(event.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      · {event.city}
                    </p>
                    <h3 className="mt-3 font-display text-xl text-slate-950 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {event.description.slice(0, 140)}…
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>

          {past.length > 0 ? (
            <div className="mt-16">
              <SectionHeading eyebrow="Past Events" title="Previous sessions" align="left" />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {past.map((event) => (
                  <div
                    key={event.slug}
                    className="rounded-[8px] border border-slate-200 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300"
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12 text-center">
            <CTAButton href="/book-consultation">Register Interest via Consultation</CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
