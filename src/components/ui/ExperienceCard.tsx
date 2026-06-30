// Reusable card for a single job entry — gradient left accent border

import { RiMapPinLine, RiTeamLine, RiTimeLine } from "react-icons/ri";
import type { Job } from "@/types";

interface ExperienceCardProps {
  job: Job;
}

export const ExperienceCard = ({ job }: ExperienceCardProps) => {
  return (
    <div className="group relative rounded-xl border border-slate-200 bg-white pl-5 pr-6 py-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      {/* Gradient left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-indigo-500 to-violet-500" />

      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {job.company}
          </h3>
          {job.client && (
            <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              Client: {job.client}
            </span>
          )}
          {job.domain && (
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
              {job.domain}
            </span>
          )}
        </div>

        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
          {job.title}
        </p>

        <div className="mt-1 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <RiTimeLine size={13} />
            {job.duration}
          </span>
          <span className="flex items-center gap-1">
            <RiMapPinLine size={13} />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <RiTeamLine size={13} />
            {job.team}
          </span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="mt-4 flex flex-col gap-2">
        {job.highlights.map((point, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
