"use client";

// Hero section — name, title, tagline, and CTA buttons

import { RiLinkedinBoxFill, RiGithubFill, RiMessage3Line } from "react-icons/ri";
import { personalInfo } from "@/data/content";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-zinc-100">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <p className="mt-4 text-lg font-medium text-zinc-600 sm:text-xl dark:text-zinc-400">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="mt-3 text-base text-zinc-500 sm:text-lg dark:text-zinc-500">
          {personalInfo.tagline}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <RiLinkedinBoxFill size={18} />
            LinkedIn
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            <RiGithubFill size={18} />
            GitHub
          </a>

          <button
            onClick={() => {
              const event = new CustomEvent("open-chat");
              window.dispatchEvent(event);
            }}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <RiMessage3Line size={18} />
            Chat with my AI twin
          </button>
        </div>
      </div>
    </section>
  );
};
