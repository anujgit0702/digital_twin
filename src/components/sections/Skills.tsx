// Skills section — grouped skill badges by category

import { skillGroups, coreCompetencies } from "@/data/content";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-zinc-50 px-6 py-24 dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Skills
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-blue-600" />

        {/* Technical skill groups */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies */}
        <div className="mt-12">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((item) => (
              <span
                key={item}
                className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
