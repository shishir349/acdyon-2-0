export type SiteEvent = {
  slug: string;
  title: string;
  status: "upcoming" | "past";
  date: string; // ISO date, no time — confirm exact start/end before publishing
  startTime: string; // "HH:MM" 24h IST — PLACEHOLDER, confirm before publishing
  endTime: string; // "HH:MM" 24h IST — PLACEHOLDER, confirm before publishing
  city: string;
  venueName: string; // PLACEHOLDER — confirm exact venue before publishing
  venueAddress: string; // PLACEHOLDER — confirm exact address before publishing
  postalCode: string; // PLACEHOLDER
  description: string;
  image: string;
  confirmed: boolean; // false = contains placeholder fields, do not publish as final
};

export const EVENTS: SiteEvent[] = [
  {
    slug: "convocation-2026",
    title: "Convocation Ceremony 2026",
    status: "upcoming",
    date: "2026-08-30",
    startTime: "10:00",
    endTime: "13:00",
    city: "New Delhi, India",
    venueName: "[Venue name — confirm]",
    venueAddress: "[Street address — confirm]",
    postalCode: "[Pincode — confirm]",
    description:
      "AcdyOn's annual convocation ceremony, conferring DBA, PhD, and Honorary Doctorate graduates from our partner universities. The ceremony brings together graduates, faculty, and partner-institution representatives for academic regalia, keynote addresses, and the formal conferral of degrees.",
    image: "/images/site/convocation-ceremony.webp",
    confirmed: false,
  },
];

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}

export function getUpcomingEvents() {
  return EVENTS.filter((e) => e.status === "upcoming").sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

export function getPastEvents() {
  return EVENTS.filter((e) => e.status === "past");
}
