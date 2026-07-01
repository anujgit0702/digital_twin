// About section — summary, key facts, and analytics illustration

import { RiMapPinLine, RiBriefcaseLine, RiRobot2Line, RiBarChartBoxLine } from "react-icons/ri";
import { personalInfo } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";

const KEY_FACTS = [
  { icon: RiMapPinLine, label: personalInfo.location },
  { icon: RiBriefcaseLine, label: "8+ years in analytics & business intelligence" },
  { icon: RiRobot2Line, label: "Building with Agentic AI" },
  { icon: RiBarChartBoxLine, label: "50+ A/B tests conducted" },
];

/* Inline SVG: data analytics bar chart + trend line */
const AnalyticsIllustration = () => (
  <svg
    viewBox="0 0 360 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-sm"
    aria-hidden="true"
  >
    {/* Card background */}
    <rect width="360" height="240" rx="16" fill="rgba(99,102,241,0.06)" />

    {/* Horizontal grid lines */}
    <line x1="32" y1="60"  x2="330" y2="60"  stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
    <line x1="32" y1="100" x2="330" y2="100" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
    <line x1="32" y1="140" x2="330" y2="140" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
    <line x1="32" y1="180" x2="330" y2="180" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />

    {/* Bars — progressively taller (growth story) */}
    <rect x="50"  y="160" width="32" height="20"  rx="4" fill="rgba(99,102,241,0.35)" />
    <rect x="102" y="140" width="32" height="40"  rx="4" fill="rgba(99,102,241,0.50)" />
    <rect x="154" y="110" width="32" height="70"  rx="4" fill="rgba(99,102,241,0.65)" />
    <rect x="206" y="85"  width="32" height="95"  rx="4" fill="rgba(139,92,246,0.75)" />
    <rect x="258" y="58"  width="32" height="122" rx="4" fill="rgba(139,92,246,0.90)" />

    {/* Trend line */}
    <polyline
      points="66,152 118,130 170,100 222,75 274,52"
      stroke="rgba(99,102,241,0.9)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Data points on trend line */}
    {([[66,152],[118,130],[170,100],[222,75],[274,52]] as [number,number][]).map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="5" fill="rgb(99,102,241)" stroke="white" strokeWidth="2" />
    ))}

    {/* X-axis labels */}
    {["Q1","Q2","Q3","Q4","Q5"].map((q, i) => (
      <text key={q} x={66 + i * 52} y="205" textAnchor="middle" fontSize="10" fill="rgba(148,163,184,0.7)" fontFamily="sans-serif">{q}</text>
    ))}

    {/* Metric badge top-right */}
    <rect x="240" y="12" width="106" height="28" rx="8" fill="rgba(99,102,241,0.85)" />
    <text x="293" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="sans-serif">+47% YoY</text>
  </svg>
);

export const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          About
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />

        <FadeIn>
        <div className="mt-12 flex flex-col gap-12 md:flex-row md:items-center">

          {/* LEFT: Text content */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="text-base leading-relaxed text-slate-600">
              {personalInfo.summary}
            </p>

            {/* Key facts */}
            <ul className="flex flex-col gap-3">
              {KEY_FACTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <Icon size={16} className="shrink-0 text-indigo-500" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Analytics illustration */}
          <div className="mx-auto w-full max-w-sm shrink-0 md:mx-0">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Analytics Impact
              </p>
              <AnalyticsIllustration />
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
};
