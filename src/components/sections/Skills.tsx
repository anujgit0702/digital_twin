// Skills section — grouped skill badges with tech illustration header

import {
  RiDatabase2Line, RiBarChartGroupedLine, RiBrainLine, RiCodeSSlashLine,
  RiPieChartLine, RiRobot2Line, RiCloudLine, RiTableLine,
} from "react-icons/ri";
import { skillGroups, coreCompetencies } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";

const TECH_ICONS = [
  { icon: RiDatabase2Line, label: "Data" },
  { icon: RiBarChartGroupedLine, label: "Analytics" },
  { icon: RiBrainLine, label: "AI/ML" },
  { icon: RiCodeSSlashLine, label: "Code" },
  { icon: RiPieChartLine, label: "BI" },
  { icon: RiRobot2Line, label: "Agents" },
  { icon: RiCloudLine, label: "Cloud" },
  { icon: RiTableLine, label: "SQL" },
];

/* Decorative tech icon banner */
const TechBanner = () => (
  <div className="mb-12 grid grid-cols-4 gap-3 sm:grid-cols-8">
    {TECH_ICONS.map(({ icon: Icon, label }) => (
      <div
        key={label}
        className="flex flex-col items-center gap-1.5 rounded-xl border border-indigo-100 bg-indigo-50/60 px-2 py-3"
      >
        <Icon size={22} className="text-indigo-500" />
        <span className="text-[9px] font-semibold uppercase tracking-wider text-indigo-400">
          {label}
        </span>
      </div>
    ))}
  </div>
);

export const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-slate-50 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Skills
        </h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />

        <FadeIn>
        <div className="mt-10">
          <TechBanner />

          {/* Technical skill groups */}
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-500">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core competencies */}
          <div className="mt-8 rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50 p-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-500">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white px-3 py-1 text-sm font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
};
