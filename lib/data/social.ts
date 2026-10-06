export type SocialLink = {
  name: string;
  href: string;
  icon: "instagram" | "linkedin" | "youtube" | "twitter" | "facebook";
  confirmed: boolean;
};

// TODO: confirm and replace placeholder handles before launch.
export const SOCIAL: SocialLink[] = [
  { name: "Instagram", href: "https://instagram.com/acdyon", icon: "instagram", confirmed: true },
  { name: "LinkedIn", href: "https://linkedin.com/company/acdyon", icon: "linkedin", confirmed: false },
  { name: "YouTube", href: "https://youtube.com/@acdyon", icon: "youtube", confirmed: false },
  { name: "X (Twitter)", href: "https://x.com/acdyon", icon: "twitter", confirmed: false },
  { name: "Facebook", href: "https://facebook.com/acdyon", icon: "facebook", confirmed: false },
];

export const SOCIAL_SAME_AS = SOCIAL.map((s) => s.href);
