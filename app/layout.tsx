import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FloatingCTA } from "@/components/layout/floating-cta";
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
    icon: "/acdyon-logo.png",
    apple: "/acdyon-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
