import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { PageTransitionLoader } from "@/components/page-transition-loader";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acdyon.com"),
  title: {
    default: "AcdyOn | Future-Focused Learning & Global Academic Recognition",
    template: "%s | AcdyOn",
  },
  description:
    "Premium executive education, AI mastery, doctoral pathways, and honorary recognition for ambitious professionals and global leaders.",
  openGraph: {
    title: "AcdyOn | Global Executive Learning Ecosystem",
    description:
      "Executive education, AI mastery, doctoral pathways, and honorary recognition for global professionals.",
    url: "https://acdyon.com",
    siteName: "AcdyOn",
    type: "website",
  },
  icons: {
    icon: "/acdyon-logo.webp",
    apple: "/acdyon-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PN6X9XWX');`,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","wc53a2twgn");`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors pb-[88px] md:pb-0`}
      >
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PN6X9XWX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          <PageTransitionLoader />
          <Navbar />
          {children}
          <Footer />
          <StickyMobileCta />
          <WhatsAppFloat />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
