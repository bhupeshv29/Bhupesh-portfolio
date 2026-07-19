import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SocialDock from "@/components/contact";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhupesh Verma | Full Stack Developer",
  description:
    "Portfolio of Bhupesh Verma, a full-stack developer from India. Building clean and simple web apps with Next.js, React, and Node.js.",
  openGraph: {
    title: "Bhupesh Verma | Full Stack Developer",
    description:
      "Portfolio of Bhupesh Verma, a full-stack developer from India.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhupesh Verma | Full Stack Developer",
    description:
      "Portfolio of Bhupesh Verma, a full-stack developer from India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} antialiased`}>
        <SocialDock />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
