"use client";

// Hero section — always-dark, two-column: text + photo with gradient ring

import Image from "next/image";
import { RiLinkedinBoxFill, RiGithubFill, RiMessage3Line, RiMapPin2Line } from "react-icons/ri";
import { personalInfo } from "@/data/content";

export const Hero = () => {
  const [firstName, lastName] = personalInfo.name.split(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6"
    >
      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 opacity-40" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-16 py-32 md:flex-row md:items-center md:justify-between">

        {/* LEFT: Text content */}
        <div className="flex flex-col items-center text-center md:max-w-2xl md:items-start md:text-left">
          {/* Pill badge */}
          <span className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Senior Analytics Professional
          </span>

          {/* Name with gradient on last name */}
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            {firstName}{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {lastName}
            </span>
          </h1>

          {/* Title */}
          <p className="mt-4 text-lg font-semibold text-slate-300 sm:text-xl">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400">
            {personalInfo.tagline}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40"
            >
              <RiLinkedinBoxFill size={18} />
              LinkedIn
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-700"
            >
              <RiGithubFill size={18} />
              GitHub
            </a>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
              className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-300 transition-all hover:border-violet-400/50 hover:bg-violet-500/20"
            >
              <RiMessage3Line size={18} />
              Chat with my AI twin
            </button>
          </div>

          {/* Location */}
          <div className="mt-6 flex items-center justify-center gap-1.5 text-sm text-slate-400 md:justify-start">
            <RiMapPin2Line size={16} aria-hidden />
            {personalInfo.location}
          </div>
        </div>

        {/* RIGHT: Photo with gradient ring */}
        <div className="relative shrink-0">
          {/* Ambient glow behind photo */}
          <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-600/20 blur-2xl" />

          {/* Gradient border ring */}
          <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-600 p-[3px] shadow-2xl shadow-indigo-500/20 sm:h-80 sm:w-80">
            {/* Photo container */}
            <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-900">
              <Image
                src="/photo.jpeg"
                alt={`${personalInfo.name} profile photo`}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-slate-600">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="animate-bounce-slow h-5 w-px bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
};
