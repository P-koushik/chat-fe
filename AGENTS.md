# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js App Router project. Route files live in `app/`, with grouped segments for auth and private areas (for example `app/(auth)/login/page.tsx` and `app/(private)/chat/[id]/page.tsx`).
Reusable UI is in `components/` (`components/ui` for primitives, `components/sidebar-03` for sidebar features). Shared hooks and helpers are in `hooks/` and `lib/` (`lib/utils.ts`).
Static assets are in `public/`. Build output is in `.next/` and should not be edited directly.

## Build, Test, and Development Commands
- `npm run dev` - start local development server at `http://localhost:3000`.
- `npm run build` - create production build.
- `npm run start` - run the production server from the build output.
- `npm run lint` - run ESLint and fail on warnings.
- `npm run lint:fix` - apply auto-fixable lint changes.
- `npm run format` / `npm run format:check` - format or verify formatting with Prettier.

## Coding Style & Naming Conventions
Use TypeScript (`.ts`/`.tsx`) with strict type checks enabled. Prefer the `@/*` import alias (example: `import { cn } from "@/lib/utils";`).
Follow Prettier defaults configured here: 100-char line width, semicolons, trailing commas, and double quotes.
Use:
- `PascalCase` for React components (`AppSidebar.tsx` pattern),
- `kebab-case` for route/component file names in `app/` (for example `search-bar.tsx`),
- `camelCase` for variables and functions.

## Testing Guidelines
There is currently no test framework configured in `package.json`. For now, treat linting and type safety as the quality gate before opening a PR.
When adding tests, colocate them near source files using `*.test.ts` or `*.test.tsx`, and add a `test` script in `package.json`.

## Commit & Pull Request Guidelines
Recent history uses Conventional Commit prefixes such as `feat:` and `fix:`. Continue this pattern with clear scopes when helpful (example: `feat(chat): add thread header`).
For PRs, include:
- a concise description of what changed and why,
- linked issue(s) if available,
- screenshots or short recordings for UI changes,
- confirmation that `npm run lint` and `npm run build` pass.

## Security & Configuration Tips
Keep secrets in `.env.local` only; never commit env files. Use `.env.example` as the template for required variables.
