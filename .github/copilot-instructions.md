# Museum Project Guidelines

## Code Style
- **BEM Methodology**: Use `__` for elements, `--` for modifiers. Enforced by `.bemlintrc.json`.
- **SCSS Organization**: Follow [src/styles/main.scss](src/styles/main.scss) import order: utils → fonts → typography → blocks.
- **Formatting**: 2-space indentation, 80-char width, trailing commas. Auto-format with `npm run format`.
- **Linting**: Run `npm run lint` before commits. Includes stylelint, prettier, and HTML linting.

## Architecture
- **Build Tool**: Vite (layoutVite project type).
- **Styling**: SCSS-first with responsive mixins. CSS handles interactions (e.g., menu toggle via `:target`).
- **JavaScript**: Minimal; add custom scripts to [src/scripts/lib/](src/scripts/lib/).
- **Structure**: Static HTML site with semantic markup.

## Build and Test
- **Start Dev Server**: `npm start`
- **Build Production**: `npm run build`
- **Test Suite**: `npm test` (includes linting + Cypress tests)
- **Deploy**: `npm run deploy` (GitHub Pages)

## Conventions
- **Responsive Design**: Use `@mixin on-tablet()` (≥640px) and `@mixin on-desktop()` (≥1280px). Design width: 1440px.
- **Transitions**: All hover effects use 0.3s duration via `@mixin hover()`.
- **Grid System**: `@mixin page-grid()` for 2/6/12 column layouts.
- **Padding**: `@mixin content-padding` for responsive spacing (20px/34px/55px).
- **Menu Navigation**: CSS-only toggle using `:target` pseudo-class.
- **Checklist Compliance**: Ensure smooth scroll, hover cursors, form validation, no horizontal scroll.

See [README.md](README.md) and [checklist.md](checklist.md) for detailed requirements.</content>
<parameter name="filePath">d:\projects\Museum\.github\copilot-instructions.md