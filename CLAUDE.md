# CLAUDE.md — Instructions for Claude Code (Cursor)

> This file tells Claude Code exactly how to work on this project.
> Read this before writing any code, creating any file, or running any command.
> When in doubt — ask. Do not proceed on assumptions.

---

## PROJECT OVERVIEW

**Project Name:** Digital Twin
**Owner:** Anuj Mittal
**Goal:** A personal portfolio website with an AI-powered chat window that responds as Anuj Mittal professionally. Primary audience: recruiters and employers discovering Anuj via LinkedIn.

**Two phases:**
- Phase 1 — Localhost build (current)
- Phase 2 — Cloud deployment on Vercel (future)

---

## GROUND RULES

1. **Always ask before acting.** Do not run commands, create files, or install packages without permission. Present what you plan to do and wait for a "go ahead."
2. **No yolo mode.** Never make sweeping changes across multiple files in one go unless explicitly asked.
3. **One task at a time.** Complete and confirm each task before moving to the next.
4. **Never touch `.env.local`.** Never read, log, or expose API keys anywhere in the code.
5. **Never commit secrets.** `.env.local` must always be in `.gitignore`.
6. **Always reference CONTENT.md** for any copy, data, or content. Do not invent or paraphrase Anuj's experience.
7. **Always reference TWIN_PERSONA.md** when working on anything related to the AI chat feature.

---

## TECH STACK

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Use App Router only — no Pages Router |
| Language | TypeScript | Strict mode on |
| Styling | Tailwind CSS | No inline styles, no CSS modules |
| AI | Claude API via `@anthropic-ai/sdk` | Server-side only — never expose API key to client |
| Animation | Framer Motion | For subtle UI transitions only |
| Icons | react-icons | Prefer `ri` (Remix Icons) set |
| Theming | next-themes | Dark/light mode support |
| Deployment | Vercel (Phase 2) | |
| Repo | GitHub | |

---

## FOLDER STRUCTURE

```
digital-twin/
├── CLAUDE.md                        ← you are here
├── PLANNING.md
├── CONTENT.md                       ← single source of truth for all content
├── TWIN_PERSONA.md                  ← AI twin behaviour and knowledge base
├── TASKS.md                         ← live task tracker
├── .env.local                       ← gitignored, never touch
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
│
├── src/
│   ├── app/
│   │   ├── page.tsx                 ← main portfolio page
│   │   ├── layout.tsx               ← root layout, metadata, fonts
│   │   ├── globals.css
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts         ← AI twin API endpoint (server-side)
│   │
│   ├── components/
│   │   ├── sections/                ← one file per page section
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/                      ← reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ExperienceCard.tsx
│   │   │   └── SkillBadge.tsx
│   │   └── chat/                    ← AI twin chat widget
│   │       ├── ChatWidget.tsx       ← floating bubble + container
│   │       ├── ChatMessage.tsx      ← individual message bubble
│   │       └── ChatInput.tsx        ← input box + send button
│   │
│   ├── data/
│   │   ├── content.ts               ← typed TS version of CONTENT.md
│   │   └── persona.ts               ← builds system prompt from TWIN_PERSONA.md
│   │
│   ├── types/
│   │   └── index.ts                 ← shared TypeScript types
│   │
│   └── lib/
│       └── utils.ts                 ← helper functions (cn, formatDate, etc.)
│
└── public/
    ├── photo.jpg                    ← Anuj's profile photo
    └── og-image.png                 ← LinkedIn/social preview image
```

---

## CODING CONVENTIONS

### General
- Use **TypeScript strictly** — no `any` types unless absolutely unavoidable and commented
- Use **named exports** for components, not default exports (except page.tsx and layout.tsx)
- Use **arrow functions** for components: `const Hero = () => { ... }`
- Keep components **small and focused** — if a component exceeds ~100 lines, consider splitting
- Add a **brief comment** at the top of each file describing what it does

### Naming
- Components: `PascalCase` (e.g. `ExperienceCard.tsx`)
- Functions & variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- CSS classes: Tailwind utility classes only — no custom class names unless absolutely necessary

### Tailwind
- Use Tailwind for **all styling** — no inline `style={{}}`, no CSS modules
- Use `cn()` utility from `src/lib/utils.ts` for conditional classes
- Responsive design: mobile-first — `base → sm → md → lg`
- Dark mode: use `dark:` prefix — always test both modes

### Data Layer
- **All content lives in `src/data/content.ts`** as typed objects
- Never hardcode strings like names, job titles, or dates directly in components
- Adding a new job or project = adding a new object to the relevant array in `content.ts`
- Types for all data objects must be defined in `src/types/index.ts`

### AI Chat (Critical)
- The Claude API call must **only happen in `src/app/api/chat/route.ts`** (server-side)
- Never import `@anthropic-ai/sdk` in any client component
- The API key is accessed via `process.env.ANTHROPIC_API_KEY` — never hardcoded
- System prompt is built in `src/data/persona.ts` using content from TWIN_PERSONA.md
- Always implement **rate limiting** on the chat API route
- Streaming responses preferred for better UX

---

## ENVIRONMENT VARIABLES

```bash
# .env.local — never commit this file
ANTHROPIC_API_KEY=your_key_here
```

In code, always access as:
```typescript
process.env.ANTHROPIC_API_KEY
```

---

## GIT CONVENTIONS

Use conventional commits — always:

```
feat: add Experience section component
fix: correct mobile layout on Hero section
chore: install framer-motion dependency
docs: update TASKS.md with completed items
style: adjust spacing on ProjectCard
refactor: extract SkillBadge into reusable component
```

**Commit checkpoints** (I will tell you when to commit — do not commit autonomously):
- After all planning docs are in place
- After Next.js scaffold is complete
- After data layer is set up
- After each major section is built
- After chat feature is working
- After polish/mobile/SEO pass

---

## WHAT NOT TO DO

- ❌ Do not use the Pages Router (`/pages` directory)
- ❌ Do not use CSS Modules or styled-components
- ❌ Do not use `any` TypeScript type without a comment explaining why
- ❌ Do not hardcode content — always pull from `src/data/content.ts`
- ❌ Do not call the Claude API from client components
- ❌ Do not commit `.env.local` or any file containing API keys
- ❌ Do not install packages without asking first
- ❌ Do not make changes to multiple files simultaneously without permission
- ❌ Do not use `console.log` in production code — use only during debugging and remove after

---

## HOW TO RUN LOCALLY

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000
```

---

## PHASE 2 NOTES (do not act on these yet)

- Deployment target: Vercel
- Add `ANTHROPIC_API_KEY` to Vercel environment variables
- Add API usage cap / rate limiting before going public
- Generate `og-image.png` for LinkedIn preview
- Run Lighthouse audit before launch