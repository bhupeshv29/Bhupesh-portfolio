import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SocialDock from "@/components/contact";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://bhupeshverma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bhupesh Verma | Full Stack Developer — Backend, AI & Infrastructure",
    template: "%s | Bhupesh Verma",
  },
  description:
    "Bhupesh Verma — Full Stack Developer specializing in backend systems, infrastructure, and applied AI. Building production-grade software with Next.js, React, Node.js, Python, and cloud-native architectures.",
  keywords: [
    "Bhupesh Verma",
    "Full Stack Developer",
    "Backend Engineer",
    "Software Engineer India",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "Cloud Infrastructure",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Bhupesh Verma" }],
  creator: "Bhupesh Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bhupesh Verma — Portfolio",
    title: "Bhupesh Verma | Full Stack Developer — Backend, AI & Infrastructure",
    description:
      "Full Stack Developer specializing in backend systems, infrastructure, and applied AI. Building production-grade software with Next.js, React, Node.js, and cloud-native architectures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhupesh Verma | Full Stack Developer",
    description:
      "Full Stack Developer specializing in backend systems, infrastructure, and applied AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bhupesh Verma",
              url: SITE_URL,
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in backend systems, infrastructure, and applied AI.",
              sameAs: [
                "https://github.com/bhupeshv29",
                "https://www.linkedin.com/in/bhupesh-verma-684991198/",
                "https://x.com/Bhupeshv29",
              ],
              knowsAbout: [
                "Full Stack Development",
                "Backend Engineering",
                "Next.js",
                "React",
                "Node.js",
                "Python",
                "Cloud Infrastructure",
                "Artificial Intelligence",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        <SocialDock />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
