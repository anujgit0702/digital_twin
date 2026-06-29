// Contact section — email, LinkedIn, GitHub links

import { RiMailLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { personalInfo } from "@/data/content";

const LINKS = [
  {
    icon: RiMailLine,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: RiLinkedinBoxFill,
    label: "LinkedIn",
    value: "linkedin.com/in/anujmittal07",
    href: personalInfo.linkedin,
  },
  {
    icon: RiGithubFill,
    label: "GitHub",
    value: "github.com/anujgit0702",
    href: personalInfo.github,
  },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Contact
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-blue-600" />

        <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          Open to Analytics Manager roles and interesting conversations. Reach out via any of the channels below.
        </p>

        {/* Contact links */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {LINKS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-4 transition-colors hover:border-blue-300 hover:bg-blue-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-blue-700 dark:hover:bg-zinc-700"
            >
              <Icon size={22} className="shrink-0 text-blue-600" />
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  {label}
                </p>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
