// Root layout — fonts, metadata

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anujmittal.site"),
  title: "Anuj Mittal — Senior Analytics Professional",
  description:
    "Portfolio of Anuj Mittal — 8+ years in analytics, experimentation, and business intelligence. Currently at American Express via EXL. Targeting Analytics Manager roles with an Agentic AI focus.",
  keywords: [
    "Anuj Mittal",
    "Analytics",
    "Data Analyst",
    "Analytics Manager",
    "A/B Testing",
    "SQL",
    "Python",
    "Power BI",
    "Agentic AI",
  ],
  authors: [{ name: "Anuj Mittal" }],
  openGraph: {
    title: "Anuj Mittal — Senior Analytics Professional",
    description:
      "Portfolio of Anuj Mittal — 8+ years in analytics and business intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
