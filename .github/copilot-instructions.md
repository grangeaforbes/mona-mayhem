# Mona Mayhem Copilot Instructions

## Scope
- Focus only on the application code and runtime behavior.
- Ignore all files under workshop/ unless explicitly requested.

## Project Overview
- Mona Mayhem is an Astro app that will present a GitHub contribution battle arena UI.
- The app uses server output with the Node adapter in standalone mode.
- Main app entry points are in src/pages/.

## Commands
- Install dependencies: npm install
- Start dev server: npm run dev
- Build production output: npm run build
- Preview production build: npm run preview
- Astro CLI shortcut: npm run astro

## Astro Best Practices
- Keep pages and endpoints small and focused; move reusable logic to utility modules.
- Use server endpoints in src/pages/api/ for external API calls and keep secrets on the server side.
- Validate request params and handle GitHub API failures with clear HTTP status codes.
- Prefer typed code (TypeScript) for endpoint inputs/outputs and shared data shapes.
- Minimize client-side JavaScript; use Astro islands only when interactivity is needed.
- Keep markup semantic and accessible (headings, labels, alt text, keyboard support).
- Co-locate styles with components/pages when practical, and keep theme tokens consistent.
- Avoid hardcoding URLs and runtime settings; centralize config/constants.
- Keep responses cache-aware where appropriate to reduce repeated API traffic.
- Run build before finalizing changes to catch type and integration issues early.

## Editing Guidelines
- Preserve existing project structure and scripts.
- Make the smallest change that satisfies the request.
- Do not add workshop-related instructions or dependencies.
