// Reusable card for a single job entry

import { RiMapPinLine, RiTeamLine, RiTimeLine } from "react-icons/ri";
import type { Job } from "@/types";

interface ExperienceCardProps {
  job: Job;
}

export const ExperienceCard = ({ job }: ExperienceCardProps) => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {job.company}
          </h3>
          {job.client && (
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Client: {job.client}
            </span>
          )}
          {job.domain && (
            <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
              {job.domain}
            </span>
          )}
        </div>

        <p className="text-base font-medium text-blue-600 dark:text-blue-400">
          {job.title}
        </p>

        {/* Meta row */}
        <div className="mt-1 flex flex-wrap gap-4 text-xs text-zinc-500 dark:text-zinc-400">
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
          <li key={i} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};
