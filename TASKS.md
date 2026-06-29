# TASKS.md — Digital Twin: Live Task Tracker

> This is the task tracker for the Digital Twin project.
> Claude Code in Cursor should read this at the start of every session.
> Update task status as work progresses. Never skip ahead without permission.
> Format: ⬜ Todo · 🔄 In Progress · ✅ Done · 🚫 Blocked

---

## HOW TO USE THIS FILE (for Claude Code)

1. Read this file at the start of every Cursor session
2. Find the first task that is 🔄 In Progress — continue it
3. If nothing is in progress, find the first ⬜ Todo task in the current phase
4. Present the plan to Anuj and wait for approval before starting
5. Mark tasks as ✅ Done when complete
6. Note commit checkpoints with 📌

---

## PHASE 0 — PLANNING (Claude.ai)

| # | Task | Status | Notes |
|---|---|---|---|
| 0.1 | Draft CONTENT.md | ✅ Done | Extracted from resume + Anuj's inputs |
| 0.2 | Draft TWIN_PERSONA.md | ✅ Done | Persona, tone, knowledge base, guardrails |
| 0.3 | Draft CLAUDE.md | ✅ Done | Instructions for Claude Code |
| 0.4 | Draft PLANNING.md | ✅ Done | Project brief and decisions |
| 0.5 | Draft TASKS.md | ✅ Done | This file |
| 0.6 | Copy all 5 docs into `digital-twin/` folder in Cursor | ⬜ Todo | Anuj to do manually |

---

## PHASE 1 — PROJECT SETUP

| # | Task | Status | Notes |
|---|---|---|---|
| 1.1 | Create `digital-twin` folder locally and open in Cursor | ✅ Done | Already done |
| 1.2 | Initialise git repo locally (`git init`) | ⬜ Todo | |
| 1.3 | Create GitHub repo `digital-twin` (public or private) | ⬜ Todo | Anuj to create on github.com |
| 1.4 | Scaffold Next.js app (`npx create-next-app@latest .`) | ⬜ Todo | TypeScript ✓ · Tailwind ✓ · App Router ✓ · src/ ✓ |
| 1.5 | Install additional dependencies | ⬜ Todo | framer-motion · @anthropic-ai/sdk · react-icons · next-themes |
| 1.6 | Create `.env.local` with Anthropic API key | ⬜ Todo | Anuj to add key manually — Claude Code must not touch this |
| 1.7 | Verify `.env.local` is in `.gitignore` | ⬜ Todo | |
| 1.8 | Clean up Next.js boilerplate (default page, globals.css) | ⬜ Todo | |

> 📌 **Commit checkpoint after 1.8:**
> `git add .`
> `git commit -m "chore: scaffold Next.js project and install dependencies"`
> `git push origin main`

---

## PHASE 2 — DATA LAYER

| # | Task | Status | Notes |
|---|---|---|---|
| 2.1 | Create `src/types/index.ts` — define all TypeScript types | ⬜ Todo | Job, Project, Skill, Award, Education, Certificate |
| 2.2 | Create `src/data/content.ts` — typed content from CONTENT.md | ⬜ Todo | All jobs, projects, skills, awards, education |
| 2.3 | Create `src/lib/utils.ts` — helper functions | ⬜ Todo | `cn()` for Tailwind class merging, `formatDate()` |
| 2.4 | Create `src/data/persona.ts` — system prompt builder | ⬜ Todo | Builds Claude system prompt from TWIN_PERSONA.md |

> 📌 **Commit checkpoint after 2.4:**
> `git add .`
> `git commit -m "feat: add data layer — types, content, persona"`
> `git push origin main`

---

## PHASE 3 — LAYOUT & NAVIGATION

| # | Task | Status | Notes |
|---|---|---|---|
| 3.1 | Set up `src/app/layout.tsx` — root layout, fonts, metadata | ⬜ Todo | Google Fonts (Inter), SEO title/description |
| 3.2 | Set up `src/app/globals.css` — base styles, CSS variables | ⬜ Todo | Dark mode variables, scrollbar styling |
| 3.3 | Build `src/components/ui/Navbar.tsx` | ⬜ Todo | Logo/name · section links · dark mode toggle |
| 3.4 | Set up `src/app/page.tsx` — main page importing all sections | ⬜ Todo | Section order: Hero → About → Skills → Experience → Projects → Contact |

> 📌 **Commit checkpoint after 3.4:**
> `git add .`
> `git commit -m "feat: add layout, navbar, and page structure"`
> `git push origin main`

---

## PHASE 4 — PORTFOLIO SECTIONS

| # | Task | Status | Notes |
|---|---|---|---|
| 4.1 | Build `Hero.tsx` | ⬜ Todo | Name, title, tagline, CTA buttons (LinkedIn, GitHub, Chat) |
| 4.2 | Build `About.tsx` | ⬜ Todo | Photo, summary paragraph, key facts |
| 4.3 | Build `Skills.tsx` | ⬜ Todo | Grouped skill badges by category |
| 4.4 | Build `ExperienceCard.tsx` (reusable component) | ⬜ Todo | Company, title, duration, location, bullet points |
| 4.5 | Build `Experience.tsx` section | ⬜ Todo | Maps over jobs array from content.ts |
| 4.6 | Build `ProjectCard.tsx` (reusable component) | ⬜ Todo | Title, description, tools, status badge, link |
| 4.7 | Build `Projects.tsx` section | ⬜ Todo | Maps over projects array from content.ts |
| 4.8 | Build `Contact.tsx` section | ⬜ Todo | Email, LinkedIn, GitHub links |

> 📌 **Commit checkpoint after 4.8:**
> `git add .`
> `git commit -m "feat: add all portfolio sections"`
> `git push origin main`

---

## PHASE 5 — AI TWIN CHAT FEATURE

| # | Task | Status | Notes |
|---|---|---|---|
| 5.1 | Create `src/app/api/chat/route.ts` — Claude API route | ⬜ Todo | Server-side only · reads persona.ts · streaming response |
| 5.2 | Build `ChatInput.tsx` — message input and send button | ⬜ Todo | Enter key to send · loading state |
| 5.3 | Build `ChatMessage.tsx` — individual message bubble | ⬜ Todo | User vs assistant styling · timestamp |
| 5.4 | Build `ChatWidget.tsx` — floating chat container | ⬜ Todo | Open/close toggle · message thread · scroll to bottom |
| 5.5 | Integrate chat widget into `page.tsx` | ⬜ Todo | Floating bottom-right position |
| 5.6 | Add rate limiting to chat API route | ⬜ Todo | Max messages per session |
| 5.7 | Test full conversation flows | ⬜ Todo | Experience Q&A · projects · skills · unknown question deflect |
| 5.8 | Refine persona prompt based on test results | ⬜ Todo | Iterate until responses feel like Anuj |

> 📌 **Commit checkpoint after 5.8:**
> `git add .`
> `git commit -m "feat: add AI twin chat widget and API route"`
> `git push origin main`

---

## PHASE 6 — POLISH & SIGN-OFF

| # | Task | Status | Notes |
|---|---|---|---|
| 6.1 | Mobile responsiveness audit — all sections | ⬜ Todo | Test on 375px, 768px, 1280px viewports |
| 6.2 | Dark mode audit — all sections | ⬜ Todo | Every component must work in both modes |
| 6.3 | Add subtle animations with Framer Motion | ⬜ Todo | Fade-in on scroll for sections |
| 6.4 | SEO metadata — title, description, OG tags | ⬜ Todo | In layout.tsx |
| 6.5 | Accessibility check — alt text, aria labels, tab order | ⬜ Todo | |
| 6.6 | Performance check — image optimisation, lazy loading | ⬜ Todo | Use Next.js `<Image>` component |
| 6.7 | Anuj reviews and approves Phase 1 build | ⬜ Todo | Final sign-off before Phase 2 |

> 📌 **Commit checkpoint after 6.7:**
> `git add .`
> `git commit -m "feat: Phase 1 complete — polish, mobile, SEO"`
> `git push origin main`

---

## PHASE 7 — CLOUD DEPLOYMENT (future — do not start yet)

| # | Task | Status | Notes |
|---|---|---|---|
| 7.1 | Connect GitHub repo to Vercel | ⬜ Todo | |
| 7.2 | Add `ANTHROPIC_API_KEY` to Vercel environment variables | ⬜ Todo | Anuj to do manually |
| 7.3 | Verify deployment builds successfully | ⬜ Todo | |
| 7.4 | Add API usage cap / stricter rate limiting | ⬜ Todo | Protect against runaway costs |
| 7.5 | Create OG image for LinkedIn preview | ⬜ Todo | 1200x630px, save to /public/og-image.png |
| 7.6 | Add Vercel Analytics (optional) | ⬜ Todo | Free tier available |
| 7.7 | Update LinkedIn profile with live URL | ⬜ Todo | Anuj to do |
| 7.8 | Final Lighthouse audit on live URL | ⬜ Todo | Target: > 90 on all metrics |

> 📌 **Commit checkpoint after 7.8:**
> `git add .`
> `git commit -m "feat: Phase 2 complete — deployed to Vercel"`
> `git push origin main`

---

## SESSION LOG

> Add a note here each time a Cursor session ends so the next session knows what happened.

| Date | What was done | Next task |
|---|---|---|
| Jun 2026 | All 5 planning docs drafted in Claude.ai | Copy docs to folder · start Phase 1 setup |