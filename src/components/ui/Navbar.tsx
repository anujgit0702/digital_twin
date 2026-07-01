"use client";

// Sticky navbar — name/logo, section links, mobile menu

import { useState, useEffect } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Name / logo */}
        <a
          href="#"
          className={cn(
            "text-lg font-bold tracking-tight transition-colors",
            scrolled ? "text-slate-900" : "text-white"
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
                  "text-sm font-medium transition-colors hover:text-indigo-500",
                  scrolled ? "text-slate-600" : "text-slate-300"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className={cn(
            "rounded-md p-2 transition-colors hover:text-indigo-400 md:hidden",
            scrolled
              ? "text-slate-600 hover:bg-slate-100"
              : "text-slate-300 hover:bg-white/10"
          )}
        >
          {menuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-6 pb-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-slate-600 transition-colors hover:text-indigo-500"
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
