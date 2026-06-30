"use client";

// Sticky navbar — name/logo, section links, dark mode toggle, mobile menu

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/content";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md dark:bg-slate-900/95 dark:shadow-slate-800/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Name / logo — always white at top (hero is dark), switches on scroll */}
        <a
          href="#"
          className={cn(
            "text-lg font-bold tracking-tight transition-colors",
            scrolled
              ? "text-slate-900 dark:text-white"
              : "text-white"
          )}
        >
          {personalInfo.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-400",
                  scrolled
                    ? "text-slate-600 dark:text-slate-400"
                    : "text-slate-300"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={cn(
                "rounded-md p-2 transition-colors hover:text-indigo-400",
                scrolled
                  ? "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  : "text-slate-300 hover:bg-white/10"
              )}
            >
              {theme === "dark" ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
            </button>
          )}

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className={cn(
              "rounded-md p-2 transition-colors hover:text-indigo-400 md:hidden",
              scrolled
                ? "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                : "text-slate-300 hover:bg-white/10"
            )}
          >
            {menuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-6 pb-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
