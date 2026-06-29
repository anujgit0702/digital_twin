// Projects section — maps over projects array from content.ts

import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-zinc-50 px-6 py-24 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Projects
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-blue-600" />

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
