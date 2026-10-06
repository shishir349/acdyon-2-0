import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EventRSVPForm } from "@/components/forms/event-rsvp-form";
import { EVENTS, getEventBySlug } from "@/lib/data/events";

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `AcdyOn ${event.title}`,
    startDate: `${event.date}T${event.startTime}:00+05:30`,
    endDate: `${event.date}T${event.endTime}:00+05:30`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venueName,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.venueAddress,
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: event.postalCode,
        addressCountry: "IN",
      },
    },
    image: [`https://acdyon.com${event.image}`],
    description: event.description,
    organizer: { "@type": "Organization", name: "AcdyOn", url: "https://acdyon.com" },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {!event.confirmed ? (
        <div className="bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-800 dark:bg-amber-950/40 dark:text-amber-300">
          Draft event — venue, time, and address are placeholders pending confirmation. Do not
          promote externally until finalized.
        </div>
      ) : null}

      <section className="relative h-[360px] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="container-premium relative flex h-full flex-col items-start justify-end pb-10 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#D4AF37]">
            {event.city}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{event.title}</h1>
          <p className="mt-2 text-sm text-slate-200">
            {new Date(event.date).toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {event.startTime}–{event.endTime} IST
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="container-premium grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl text-slate-950 dark:text-white">About this event</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              {event.description}
            </p>
            <div className="mt-8 rounded-[8px] border border-slate-200 p-5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
              <p className="font-semibold text-slate-950 dark:text-white">Venue</p>
              <p className="mt-1">{event.venueName}</p>
              <p>{event.venueAddress}</p>
              <p>{event.city} {event.postalCode}</p>
            </div>
          </div>

          <div className="rounded-[8px] border border-slate-200 p-6 dark:border-slate-800">
            <h3 className="font-display text-xl text-slate-950 dark:text-white">RSVP</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Confirm your attendance below. We'll email full ceremony details closer to the date.
            </p>
            <div className="mt-6">
              <EventRSVPForm eventSlug={event.slug} eventName={event.title} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
