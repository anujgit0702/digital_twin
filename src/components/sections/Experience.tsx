// Experience section — maps over jobs array from content.ts

import { jobs } from "@/data/content";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Experience
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-blue-600" />

        {/* Cards */}
        <div className="mt-12 flex flex-col gap-6">
          {jobs.map((job, i) => (
            <ExperienceCard key={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};
