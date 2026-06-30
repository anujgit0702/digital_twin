// Reusable card for a single project — gradient top border + hover glow

import { RiExternalLinkLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:ring-emerald-800",
  "In Progress": "bg-amber-50 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:ring-amber-800",
  Completed: "bg-slate-100 text-slate-600 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:ring-slate-600",
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800">
      {/* Gradient top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-violet-500" />

      <div className="flex flex-1 flex-col p-6">
        {/* Title + status + link */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-semibold", STATUS_STYLES[project.status])}>
              {project.status}
            </span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title}`}
                className="text-slate-400 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                <RiExternalLinkLine size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tool badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200 dark:bg-slate-700 dark:text-slate-400 dark:ring-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
