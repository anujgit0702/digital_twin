# PLANNING.md — Digital Twin: Project Brief

> This document captures the project goals, decisions, constraints, and context.
> It is the reference document for anyone (or any AI) asking "what is this project?"
> Last updated: June 2026

---

## WHAT IS THIS PROJECT?

Digital Twin is a personal portfolio website for Anuj Mittal, a Senior Consultant in Analytics with 8+ years of experience. The defining feature is an AI-powered chat window that responds as Anuj himself — allowing visitors (primarily recruiters and employers discovering him via LinkedIn) to have a real conversation about his professional background, skills, and projects.

The name "Digital Twin" reflects the core idea: the website is not just a static resume — it is a living, interactive representation of Anuj as a professional.

---

## GOALS

### Primary
- Attract Analytics Manager roles at companies that value data leadership + AI capability
- Give recruiters and employers a richer experience than a PDF resume
- Demonstrate Anuj's Agentic AI skills through the product itself (the twin is the proof)

### Secondary
- Showcase personal projects (Career Conversation bot, Deep Research Agent, this site)
- Be easy to maintain — adding a new job or project should take minutes, not hours
- Be shareable via a single URL (Phase 2)

---

## TARGET AUDIENCE

| Visitor Type | What They Want | What the Site Gives Them |
|---|---|---|
| Recruiter on LinkedIn | Quick sense of background & fit | Hero section + AI twin to ask questions |
| Hiring Manager | Depth on specific experience | Experience section + chat for follow-ups |
| Technical Interviewer | Evidence of skills & projects | Projects section + GitHub links |
| Curious visitor | What does this person do? | Full portfolio + the twin as a conversation |

---

## PHASES

### Phase 1 — Localhost (current)
Build and validate the complete portfolio locally. Nothing is deployed publicly. Goal is a fully working, polished product running on `http://localhost:3000`.

**Exit criteria for Phase 1:**
- All sections built and populated with real content
- AI twin chat working with correct persona and knowledge
- Mobile responsive on all sections
- Dark/light mode working
- Anuj has reviewed and approved the design

### Phase 2 — Cloud Deployment (future)
Deploy the Phase 1 build publicly via Vercel. Add security hardening for the AI chat (rate limiting, usage caps). Share URL on LinkedIn profile.

**Exit criteria for Phase 2:**
- Live public URL accessible from any device
- API key secured as Vercel environment variable
- Rate limiting active on chat endpoint
- OG image set for LinkedIn preview
- Lighthouse score > 90 on performance and accessibility

---

## KEY DECISIONS & RATIONALE

### Why Next.js?
Anuj has no prior frontend or backend experience. Next.js gives both in one framework — the portfolio UI (frontend) and the chat API route (backend) live in the same project. Vercel (made by the Next.js team) makes deployment a single click. App Router is used as it is the current standard.

### Why Tailwind CSS?
Fastest way to build a good-looking UI without writing custom CSS. Utility-first approach means Claude Code can style components inline without managing separate stylesheet files.

### Why Claude API for the twin?
Anuj already uses Claude and Anthropic's ecosystem. Claude's instruction-following and persona consistency make it the best fit for a professional twin that needs to stay in character reliably.

### Why a single `content.ts` data file?
Keeping all content in one typed TypeScript file means:
- Adding a new job = adding one object to an array
- No CMS, no database, no extra infrastructure
- Claude Code always knows where the data lives
- Easy to version control alongside code

### Why not WordPress / Webflow / Framer?
Those tools give less control over the AI integration. The chat twin requires a custom API route and server-side Claude API calls — not possible in no-code tools without significant workarounds.

### Why Vercel for deployment?
Free tier is sufficient for a personal portfolio. Native Next.js support. Automatic deployments on every GitHub push. Environment variables handled securely.

---

## CONSTRAINTS

- **No database.** All content is static and lives in `src/data/content.ts`. If dynamic content is needed in future, this decision should be revisited.
- **API key security.** The Anthropic API key must never be exposed to the client. All Claude API calls happen server-side only.
- **Budget.** This is a personal project. Anthropic API costs should be managed via rate limiting and per-session message caps.
- **Maintenance simplicity.** Anuj is not a developer. Any update to content should require only editing `CONTENT.md` and syncing to `content.ts` — not touching component code.
- **No custom domain in Phase 1.** Phase 1 runs on localhost only. A custom domain is a Phase 2 consideration.

---

## TECH STACK SUMMARY

| Component | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| AI | Claude API (`@anthropic-ai/sdk`) |
| Animation | Framer Motion |
| Icons | react-icons (Remix Icons) |
| Theming | next-themes |
| IDE | Cursor |
| Version Control | GitHub |
| Deployment | Vercel (Phase 2) |

---

## OPEN QUESTIONS LOG

| # | Question | Status | Resolution |
|---|---|---|---|
| 1 | Custom domain name for Phase 2? | Open | Not decided yet |
| 2 | Message cap per session for the twin? | Open | To decide before Phase 2 |
| 3 | Should the twin support streaming responses? | Open | Preferred — to be implemented |
| 4 | Profile photo — does Anuj have one to use? | Open | To be added to /public/photo.jpg |
| 5 | OG image design for LinkedIn preview? | Open | To be created before Phase 2 |
| 6 | Should the site have a blog section? | Open | Not in scope for Phase 1 |
| 7 | Analytics / visitor tracking in Phase 2? | Open | Consider Vercel Analytics (free) |

---

## PLANNING DOCUMENTS INDEX

| File | Purpose |
|---|---|
| `CLAUDE.md` | Instructions for Claude Code in Cursor |
| `PLANNING.md` | This file — project brief and decisions |
| `CONTENT.md` | Single source of truth for all portfolio content |
| `TWIN_PERSONA.md` | AI twin behaviour, tone, and knowledge base |
| `TASKS.md` | Live task tracker — what to build next |