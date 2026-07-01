// Projects section — code window illustration header + project cards

import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";

/* Inline SVG: stylised code editor window */
const CodeWindowIllustration = () => (
  <svg
    viewBox="0 0 280 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-xs"
    aria-hidden="true"
  >
    {/* Window frame */}
    <rect width="280" height="160" rx="10" fill="rgba(15,23,42,0.7)" />
    <rect width="280" height="32" rx="10" fill="rgba(30,41,59,0.9)" />
    <rect y="22" width="280" height="10" fill="rgba(30,41,59,0.9)" />

    {/* Traffic light dots */}
    <circle cx="20" cy="16" r="5" fill="#ef4444" />
    <circle cx="36" cy="16" r="5" fill="#f59e0b" />
    <circle cx="52" cy="16" r="5" fill="#22c55e" />

    {/* Tab label */}
    <rect x="68" y="8" width="80" height="16" rx="4" fill="rgba(99,102,241,0.3)" />
    <text x="108" y="20" textAnchor="middle" fontSize="9" fill="rgba(165,180,252,0.9)" fontFamily="monospace">portfolio.tsx</text>

    {/* Code lines — varied widths for realism */}
    <rect x="16" y="46" width="40"  height="7" rx="2" fill="rgba(139,92,246,0.7)" />
    <rect x="62" y="46" width="80"  height="7" rx="2" fill="rgba(99,102,241,0.5)" />
    <rect x="148" y="46" width="30" height="7" rx="2" fill="rgba(248,113,113,0.5)" />

    <rect x="24" y="62" width="60"  height="7" rx="2" fill="rgba(99,102,241,0.4)" />
    <rect x="90" y="62" width="100" height="7" rx="2" fill="rgba(148,163,184,0.3)" />

    <rect x="24" y="78" width="90"  height="7" rx="2" fill="rgba(34,197,94,0.5)" />
    <rect x="120" y="78" width="50" height="7" rx="2" fill="rgba(248,113,113,0.4)" />

    <rect x="16" y="94"  width="50"  height="7" rx="2" fill="rgba(139,92,246,0.6)" />
    <rect x="72" y="94"  width="80"  height="7" rx="2" fill="rgba(99,102,241,0.4)" />
    <rect x="158" y="94" width="40"  height="7" rx="2" fill="rgba(148,163,184,0.3)" />

    <rect x="24" y="110" width="110" height="7" rx="2" fill="rgba(148,163,184,0.25)" />
    <rect x="24" y="126" width="70"  height="7" rx="2" fill="rgba(34,197,94,0.45)" />
    <rect x="100" y="126" width="60" height="7" rx="2" fill="rgba(99,102,241,0.4)" />

    {/* Cursor blink */}
    <rect x="170" y="126" width="2" height="9" rx="1" fill="rgba(165,180,252,0.8)" />
  </svg>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading + illustration row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Projects
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>
          <div className="hidden w-72 sm:block">
            <CodeWindowIllustration />
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
