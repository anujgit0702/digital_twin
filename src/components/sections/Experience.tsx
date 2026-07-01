// Experience section — timeline rail with career journey illustration

import { RiBriefcase4Line } from "react-icons/ri";
import { jobs } from "@/data/content";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { FadeIn } from "@/components/ui/FadeIn";

/* Inline SVG: stylised career growth chart for section header */
const CareerIllustration = () => (
  <svg
    viewBox="0 0 320 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-xs"
    aria-hidden="true"
  >
    {/* Upward staircase silhouette */}
    <path d="M20 70 L20 55 L70 55 L70 40 L130 40 L130 25 L200 25 L200 10 L300 10" stroke="rgba(99,102,241,0.5)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M20 70 L20 55 L70 55 L70 40 L130 40 L130 25 L200 25 L200 10 L300 10 L300 70 Z" fill="rgba(99,102,241,0.07)"/>

    {/* Step markers */}
    {[[70,55],[130,40],[200,25],[300,10]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="4" fill="rgb(99,102,241)" opacity="0.8" />
    ))}

    {/* Labels */}
    {[["2016","Analyst"],["2019","Sr. Analyst"],["2021","Manager"],["2024","Lead"]].map(([year,role],i) => (
      <g key={year}>
        <text x={[70,130,200,300][i]} y={[75,60,45,30][i]} textAnchor="middle" fontSize="8" fill="rgba(148,163,184,0.8)" fontFamily="sans-serif">{year}</text>
      </g>
    ))}
  </svg>
);

export const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading + illustration row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Experience
            </h2>
            <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
          </div>
          <div className="hidden w-80 sm:block">
            <CareerIllustration />
          </div>
        </div>

        {/* Timeline rail + cards */}
        <div className="relative mt-12 flex flex-col gap-6">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-3 hidden h-full w-px bg-gradient-to-b from-indigo-500 via-violet-400 to-transparent md:block" />

          {jobs.map((job, i) => (
            <FadeIn key={i} delay={i * 0.08}>
            <div className="relative md:pl-8">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-6 hidden h-2.5 w-2.5 rounded-full border-2 border-indigo-500 bg-white md:block" />
              <ExperienceCard job={job} />
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
