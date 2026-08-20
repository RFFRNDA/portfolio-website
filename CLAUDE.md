# CLAUDE.md 

Proyek portfolio pribadi (React 18 + TypeScript + Vite + Tailwind + React Router, data statis JSON/TS, deploy Vercel). Tiga dokumen di bawah ini adalah sumber kebenaran utama untuk apa yang dibangun. Baca sebelum mulai kerja, dan jangan menyimpang darinya tanpa konfirmasi ke user.

@PRD.md
@ARCHITECTURE.md
@DESIGN.md

## Prinsip kerja umum

**Tradeoff:** prinsip ini mengutamakan kehati-hatian di atas kecepatan. Untuk task remeh, gunakan judgement.

## 1. Think Before Coding
**Don't assume. Don't hide confusion. Surface tradeoffs.**
Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First
**Minimum code that solves the problem. Nothing speculative.**
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.
Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes
**Touch only what you must. Clean up only your own mess.**
When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.
When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.
The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution
**Define success criteria. Loop until verified.**
Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```
Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## Cara kerja proyek ini
- Kerjakan bertahap, jangan generate seluruh situs dalam satu langkah. Urutan yang disarankan: setup project & folder structure → data layer (`types/`, `data/projects.ts`, `data/certifications.ts`, `data/experiences.ts`, `data/i18n/`) → `LanguageContext` → shared components (Navbar, Footer) → page Home → About → Project.
- Jangan menambah dependency baru di luar yang disebut di ARCHITECTURE.md (mis. `react-i18next`) tanpa bertanya dulu ke user.
- Jangan mengubah struktur folder di ARCHITECTURE.md kecuali ada alasan teknis kuat.Tanyakan dulu sebelum reorganisasi besar.

## Commit
- Commit di tiap milestone yang berhasil di-build, dengan pesan singkat dan jelas.
- Jangan commit langsung perubahan besar tanpa direview user dulu jika menyangkut struktur data atau desain inti.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

