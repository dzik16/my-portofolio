# Protofolio

Personal portfolio for M. Dzikri Alfarisy, focused on presenting mobile and web development experience to recruiters and prospective clients.

## Stack and Commands

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion.
- `npm run dev` starts local development.
- `npm run build` creates a production build.
- `npm run lint` runs ESLint.
- `npx tsc --noEmit` runs the type checker.
- `npx playwright test --list` validates the E2E configuration.

## Project Rules

- Preserve the existing dark, motion-led visual language and Indonesian document language.
- Design mobile-first; verify narrow layouts before desktop refinements.
- Keep content-driven portfolio data close to the page until a concrete reuse boundary appears.
- Do not commit secrets, `.env.test`, generated QA specs, or lockfile changes unrelated to the task.

## Architecture Stage

Stage 1: single deployable, small team, and a compact App Router surface. Keep the current structure until a bounded context has multiple screens, independent business rules, or a clear ownership boundary. Reconsider Stage 2 when those triggers appear.

## Bounded Contexts

| Context | Current boundary | Primary paths |
|---|---|---|
| Portfolio presentation | Public profile, skills, experience, projects, contact | `app/page.tsx`, `components/` |

## Verification Checklist

- Run `npx tsc --noEmit` after TypeScript changes.
- Run `npm run lint` before handoff.
- Use Playwright for user-facing flows once E2E specs exist.

@AGENTS.md
@~/.claude/docs/ddd-patterns.md
@~/.claude/docs/modular-architecture.md
@.claude/memory/patterns.md
