// Reusable card for a single project entry

import { RiExternalLinkLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "In Progress": "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Completed: "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300",
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
      {/* Title + status + link */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <div className="flex shrink-0 items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-medium",
              STATUS_STYLES[project.status]
            )}
          >
            {project.status}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="text-zinc-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <RiExternalLinkLine size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {/* Tool badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};
