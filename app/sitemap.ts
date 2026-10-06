import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "about",
  "ai-courses",
  "ai-courses/agentic-ai",
  "blogs",
  "book-consultation",
  "contact",
  "cookie-policy",
  "doctoral-programs",
  "doctoral-programs/dba",
  "doctoral-programs/dba/birchwood",
  "doctoral-programs/dba/birchwood-university",
  "doctoral-programs/dba/dunster-business-school",
  "doctoral-programs/dba/eimt",
  "doctoral-programs/dba/kennedy-university",
  "doctoral-programs/dba/lsmt",
  "doctoral-programs/phd",
  "doctoral-programs/phd/dunster-business-school",
  "doctoral-programs/phd/kennedy-university",
  "doctoral-programs/post-doctorate",
  "doctoral-programs/upgrad",
  "doctoral-programs/upgrad/cto-ai-leadership-iiitb-iimu",
  "doctoral-programs/upgrad/global-dba-ssbm",
  "doctoral-programs/upgrad/dba-edgewood",
  "doctoral-programs/upgrad/dba-esgci-paris",
  "doctoral-programs/upgrad/dba-golden-gate",
  "doctoral-programs/upgrad/dba-rushford",
  "doctoral-programs/upgrad/cto-ai-officer-waterloo",
  "doctoral-programs/upgrad/dba-gen-ai-golden-gate",
  "honorary-recognition",
  "honorary-recognition/dunster-business-school",
  "honorary-recognition/kennedy-university",
  "honorary-recognition/lsbs",
  "privacy-policy",
  "programs",
  "programs/agentic-ai-automation-mastery",
  "programs/agentic-ai-cybersecurity-mastery",
  "refund-policy",
  "resources/brochures",
  "resources/events",
  "resources/events/convocation-2026",
  "scholarship-calculator",
  "success-stories",
  "terms-and-conditions",
  "universities",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://acdyon.com";
  return routes.map((route) => ({
    url: route ? `${base}/${route}/` : `${base}/`,
    lastModified: new Date(),
  }));
}
