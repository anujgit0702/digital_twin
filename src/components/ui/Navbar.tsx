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
        "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md dark:bg-zinc-950/90"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Name / logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          {personalInfo.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + mobile menu button */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              {theme === "dark" ? (
                <RiSunLine size={18} />
              ) : (
                <RiMoonLine size={18} />
              )}
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="rounded-md p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 md:hidden"
          >
            {menuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 pb-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
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
