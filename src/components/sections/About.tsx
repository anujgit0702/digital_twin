// About section — photo, summary paragraph, key facts

import Image from "next/image";
import { RiMapPinLine, RiBriefcaseLine, RiRobot2Line } from "react-icons/ri";
import { personalInfo } from "@/data/content";

const KEY_FACTS = [
  { icon: RiMapPinLine, label: personalInfo.location },
  { icon: RiBriefcaseLine, label: "8+ years in analytics" },
  { icon: RiRobot2Line, label: "Building with Agentic AI" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          About
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-blue-600" />

        <div className="mt-12 flex flex-col items-start gap-12 md:flex-row md:items-center">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <Image
                src="/photo.jpeg"
                alt={`${personalInfo.name} profile photo`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-6">
            {/* Summary */}
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {personalInfo.summary}
            </p>

            {/* Key facts */}
            <ul className="flex flex-col gap-2">
              {KEY_FACTS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400"
                >
                  <Icon size={16} className="shrink-0 text-blue-600" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
