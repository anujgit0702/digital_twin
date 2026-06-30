// Root layout — fonts, metadata, dark mode provider

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
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
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased dark:bg-slate-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
