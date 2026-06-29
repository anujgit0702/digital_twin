// Main portfolio page — sections imported here in order

import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section id="hero" className="flex min-h-screen items-center justify-center">
          <p className="text-zinc-400">Hero — coming soon</p>
        </section>
        <section id="about" className="flex min-h-screen items-center justify-center">
          <p className="text-zinc-400">About — coming soon</p>
        </section>
        <section id="skills" className="flex min-h-screen items-center justify-center">
          <p className="text-zinc-400">Skills — coming soon</p>
        </section>
        <section id="experience" className="flex min-h-screen items-center justify-center">
          <p className="text-zinc-400">Experience — coming soon</p>
        </section>
        <section id="projects" className="flex min-h-screen items-center justify-center">
          <p className="text-zinc-400">Projects — coming soon</p>
        </section>
        <section id="contact" className="flex min-h-screen items-center justify-center">
          <p className="text-zinc-400">Contact — coming soon</p>
        </section>
      </main>
    </>
  );
}
