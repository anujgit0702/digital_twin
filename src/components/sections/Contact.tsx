// Contact section — dark gradient background with network illustration

import { RiMailLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { personalInfo } from "@/data/content";

const LINKS = [
  {
    icon: RiMailLine,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: RiLinkedinBoxFill,
    label: "LinkedIn",
    value: "linkedin.com/in/anujmittal07",
    href: personalInfo.linkedin,
  },
  {
    icon: RiGithubFill,
    label: "GitHub",
    value: "github.com/anujgit0702",
    href: personalInfo.github,
  },
];

/* Inline SVG: network / connection graph */
const NetworkIllustration = () => (
  <svg
    viewBox="0 0 300 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto w-full max-w-xs opacity-70"
    aria-hidden="true"
  >
    {/* Connection lines */}
    <line x1="150" y1="90"  x2="50"  y2="40"  stroke="rgba(99,102,241,0.4)"  strokeWidth="1.5" />
    <line x1="150" y1="90"  x2="250" y2="40"  stroke="rgba(99,102,241,0.4)"  strokeWidth="1.5" />
    <line x1="150" y1="90"  x2="60"  y2="150" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
    <line x1="150" y1="90"  x2="240" y2="150" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" />
    <line x1="150" y1="90"  x2="150" y2="20"  stroke="rgba(99,102,241,0.3)"  strokeWidth="1.5" />
    <line x1="50"  y1="40"  x2="150" y2="20"  stroke="rgba(99,102,241,0.2)"  strokeWidth="1" strokeDasharray="4 4" />
    <line x1="250" y1="40"  x2="150" y2="20"  stroke="rgba(99,102,241,0.2)"  strokeWidth="1" strokeDasharray="4 4" />

    {/* Satellite nodes */}
    <circle cx="50"  cy="40"  r="10" fill="rgba(99,102,241,0.3)"  stroke="rgba(99,102,241,0.6)"  strokeWidth="1.5" />
    <circle cx="250" cy="40"  r="10" fill="rgba(99,102,241,0.3)"  stroke="rgba(99,102,241,0.6)"  strokeWidth="1.5" />
    <circle cx="60"  cy="150" r="10" fill="rgba(139,92,246,0.3)"  stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
    <circle cx="240" cy="150" r="10" fill="rgba(139,92,246,0.3)"  stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
    <circle cx="150" cy="20"  r="8"  fill="rgba(99,102,241,0.2)"  stroke="rgba(99,102,241,0.4)"  strokeWidth="1" />

    {/* Central node — pulsing ring */}
    <circle cx="150" cy="90" r="28" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
    <circle cx="150" cy="90" r="20" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" />
    <circle cx="150" cy="90" r="12" fill="rgba(99,102,241,0.5)" />

    {/* Person silhouette in center */}
    <circle cx="150" cy="84" r="4" fill="white" />
    <path d="M143 98 Q143 92 150 92 Q157 92 157 98" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-6 py-24"
    >
      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 opacity-20" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Contact
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />

        <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">

          {/* Left: text + links */}
          <div className="flex-1">
            <p className="max-w-md text-base leading-relaxed text-slate-400">
              Open to Analytics Manager roles and interesting conversations. Reach out via any of the channels below.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {LINKS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-4 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:bg-indigo-950/40 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <Icon size={22} className="shrink-0 text-indigo-400 transition-colors group-hover:text-indigo-300" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: network illustration */}
          <div className="w-full max-w-xs shrink-0">
            <NetworkIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
