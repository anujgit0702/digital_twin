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
| 0.6 | Copy all 5 docs into `digital-twin/` folder in Cursor | ✅ Done | All 5 docs confirmed in digital_twin/ |

---

## PHASE 1 — PROJECT SETUP

| # | Task | Status | Notes |
|---|---|---|---|
| 1.1 | Create `digital-twin` folder locally and open in Cursor | ✅ Done | Already done |
| 1.2 | Initialise git repo locally (`git init`) | ✅ Done | |
| 1.3 | Create GitHub repo `digital-twin` (public or private) | ✅ Done | https://github.com/anujgit0702/digital_twin.git |
| 1.4 | Scaffold Next.js app (`npx create-next-app@latest .`) | ✅ Done | TypeScript ✓ · Tailwind ✓ · App Router ✓ · src/ ✓ |
| 1.5 | Install additional dependencies | ✅ Done | framer-motion · @anthropic-ai/sdk · react-icons · next-themes |
| 1.6 | Create `.env.local` with Anthropic API key | ✅ Done | Added by Anuj manually |
| 1.7 | Verify `.env.local` is in `.gitignore` | ✅ Done | Covered by `.env*` rule |
| 1.8 | Clean up Next.js boilerplate (default page, globals.css) | ✅ Done | |

> 📌 **Commit checkpoint after 1.8:**
> `git add .`
> `git commit -m "chore: scaffold Next.js project and install dependencies"`
> `git push origin main`

---

## PHASE 2 — DATA LAYER

| # | Task | Status | Notes |
|---|---|---|---|
| 2.1 | Create `src/types/index.ts` — define all TypeScript types | ✅ Done | PersonalInfo, Job, Project, SkillGroup, Award, Education, Certificate, ChatMessage |
| 2.2 | Create `src/data/content.ts` — typed content from CONTENT.md | ✅ Done | All jobs, projects, skills, awards, education, certificates, interests |
| 2.3 | Create `src/lib/utils.ts` — helper functions | ✅ Done | `cn()` for Tailwind class merging, `formatDate()` |
| 2.4 | Create `src/data/persona.ts` — system prompt builder | ✅ Done | buildSystemPrompt() + TWIN_OPENING_MESSAGE exported |

> 📌 **Commit checkpoint after 2.4:**
> `git add .`
> `git commit -m "feat: add data layer — types, content, persona"`
> `git push origin main`

---

## PHASE 3 — LAYOUT & NAVIGATION

| # | Task | Status | Notes |
|---|---|---|---|
| 3.1 | Set up `src/app/layout.tsx` — root layout, fonts, metadata | ✅ Done | Inter font, SEO metadata, OG tags, ThemeProvider |
| 3.2 | Set up `src/app/globals.css` — base styles, CSS variables | ✅ Done | Inter font variable wired in |
| 3.3 | Build `src/components/ui/Navbar.tsx` | ✅ Done | Name, section links, dark mode toggle, mobile menu |
| 3.4 | Set up `src/app/page.tsx` — main page importing all sections | ✅ Done | Navbar + section stubs with correct IDs in order |

> 📌 **Commit checkpoint after 3.4:**
> `git add .`
> `git commit -m "feat: add layout, navbar, and page structure"`
> `git push origin main`

---

## PHASE 4 — PORTFOLIO SECTIONS

| # | Task | Status | Notes |
|---|---|---|---|
| 4.1 | Build `Hero.tsx` | ✅ Done | Name, title, tagline, CTA buttons (LinkedIn, GitHub, Chat) |
| 4.2 | Build `About.tsx` | ✅ Done | Photo, summary paragraph, key facts |
| 4.3 | Build `Skills.tsx` | ✅ Done | Grouped skill badges by category |
| 4.4 | Build `ExperienceCard.tsx` (reusable component) | ✅ Done | Company, title, duration, location, bullet points |
| 4.5 | Build `Experience.tsx` section | ✅ Done | Maps over jobs array from content.ts |
| 4.6 | Build `ProjectCard.tsx` (reusable component) | ✅ Done | Title, description, tools, status badge, link |
| 4.7 | Build `Projects.tsx` section | ✅ Done | Maps over projects array from content.ts |
| 4.8 | Build `Contact.tsx` section | ✅ Done | Email, LinkedIn, GitHub links |

> 📌 **Commit checkpoint after 4.8:**
> `git add .`
> `git commit -m "feat: add all portfolio sections"`
> `git push origin main`

---

## PHASE 5 — AI TWIN CHAT FEATURE

| # | Task | Status | Notes |
|---|---|---|---|
| 5.1 | Create `src/app/api/chat/route.ts` — DeepSeek API route | ✅ Done | Server-side only · reads persona.ts · streaming response · DeepSeek API |
| 5.2 | Build `ChatInput.tsx` — message input and send button | ✅ Done | Enter key to send · Shift+Enter for newline · disabled during stream |
| 5.3 | Build `ChatMessage.tsx` — individual message bubble | ✅ Done | User vs assistant styling · blinking cursor while streaming |
| 5.4 | Build `ChatWidget.tsx` — floating chat container | ✅ Done | Open/close toggle · message thread · scroll to bottom · rate limit message |
| 5.5 | Integrate chat widget into `page.tsx` | ✅ Done | Floating bottom-right position |
| 5.6 | Add rate limiting to chat API route | ✅ Done | 20 messages per IP per server session |
| 5.7 | Test full conversation flows | ✅ Done | Experience Q&A · projects · skills · unknown question deflect — tested in browser |
| 5.8 | Refine persona prompt based on test results | ✅ Done | Concise replies, no markdown, no trailing questions, Refyne designation fixed, links as hyperlinks |

> 📌 **Commit checkpoint after 5.8:**
> `git add .`
> `git commit -m "feat: add AI twin chat widget and API route"`
> `git push origin main`

---

## PHASE 6 — POLISH & SIGN-OFF

| # | Task | Status | Notes |
|---|---|---|---|
| 6.1 | Mobile responsiveness audit — all sections | ✅ Done | ChatWidget width fixed for 375px screens; all sections already mobile-first |
| 6.2 | Dark mode audit — all sections | ✅ Done | Dark mode intentionally removed (ThemeProvider dropped, toggle removed from Navbar) |
| 6.3 | Add subtle animations with Framer Motion | ✅ Done | FadeIn component created; applied to About, Skills, Experience (staggered), Projects (staggered), Contact |
| 6.4 | SEO metadata — title, description, OG tags | ✅ Done | Already in layout.tsx from Phase 3 |
| 6.5 | Accessibility check — alt text, aria labels, tab order | ✅ Done | aria-label added to ChatInput textarea; SVGs have aria-hidden; all buttons and links labelled |
| 6.6 | Performance check — image optimisation, lazy loading | ✅ Done | Next.js Image with priority already in use; no other images |
| 6.7 | Anuj reviews and approves Phase 1 build | ✅ Done | Browser checklist run; found & fixed: navbar invisible on load (removed `pt-16` white-gap bug), scroll indicator mis-positioned (same fix), location badge moved below CTA row, chat persona fabricating answers (added no-fabrication rule + accurate "how site was built" content), chat replies too long/sarcastic/ending in questions (fixed contradictory example in system prompt, tightened tone/length rules, capped max_tokens). Anuj signed off. |

> 📌 **Commit checkpoint after 6.7:**
> `git add .`
> `git commit -m "feat: Phase 1 complete — polish, mobile, SEO"`
> `git push origin main`

---

## PHASE 7 — CLOUD DEPLOYMENT (future — do not start yet)

| # | Task | Status | Notes |
|---|---|---|---|
| 7.1 | Connect GitHub repo to Vercel | ⬜ Todo | |
| 7.2 | Add `DEEPSEEK_API_KEY` to Vercel environment variables | ⬜ Todo | Anuj to do manually |
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
| Jun 2026 | Phase 1 complete — git init, GitHub remote, Next.js scaffold, deps installed, boilerplate cleaned, committed and pushed | Start Phase 2: Task 2.1 (src/types/index.ts) |
| Jun 2026 | Phase 2 complete — types, content.ts, utils.ts, persona.ts committed and pushed | Start Phase 3: Task 3.1 (layout.tsx) |
| Jun 2026 | Phase 3 complete — layout.tsx (Inter, SEO, ThemeProvider), globals.css, Navbar.tsx, page.tsx committed and pushed | Start Phase 4: Task 4.1 (Hero.tsx) |
| Jun 2026 | Phase 4 complete — Hero, About, Skills, ExperienceCard, Experience, ProjectCard, Projects, Contact all built and wired into page.tsx | Start Phase 5: Task 5.1 (chat/route.ts) |
| Jul 2026 | Phase 5 tasks 5.1–5.6 complete — DeepSeek streaming API route, ChatInput, ChatMessage, ChatWidget, wired into page.tsx, IP rate limiting. @anthropic-ai/sdk removed. Live API test passed. | Tasks 5.7–5.8: browser testing and persona refinement |
| Jul 2026 | Phase 5 complete (5.7–5.8) — browser tested 7 issues and fixed all: open-chat button, streaming throttle, no trailing questions, bold parsing, Refyne designation, hyperlinks, concise replies. Dark mode removed. Pushed to GitHub. | Start Phase 6 |
| Jul 2026 | Phase 6 complete (6.1–6.6) — mobile width fix, dark mode removed, FadeIn component + staggered animations on all sections, SEO confirmed, aria-label on chat input, image optimisation confirmed. Task 7.2 updated to DEEPSEEK_API_KEY. | Task 6.7: Anuj sign-off, then Phase 7 deployment |
| Jul 2026 | Task 6.7 in progress — browser test checklist shared with Anuj (10 areas, ~30 checks). Phase 6 code complete and build passes, NOT yet committed/pushed. Session ended. | Resume at 6.7: run checklist, fix issues, commit, push, start Phase 7 |
| Jul 2026 | Task 6.7 complete — Anuj ran the checklist and found 4 issues, all fixed: navbar white-gap/visibility bug (`pt-16` removed from main, `scroll-mt-20` added to sections), scroll indicator position (same root cause), location badge moved below CTA buttons, chat persona fabricating an answer + being long/sarcastic/question-ending (persona.ts + TWIN_PERSONA.md tightened, max_tokens capped at 220). Anuj signed off. Not yet committed/pushed. | Commit + push Phase 6, then start Phase 7 (Vercel deployment) |