# NAMU — Museum landing page

Responsive landing page for the National Art Museum of Ukraine: current exhibitions,
a lecture announcement, a collection gallery with a slider, and a newsletter
subscription form.

## Links

- [DEMO LINK](https://HiljSV.github.io/Museum/)
- [Figma design](https://www.figma.com/design/tC0kH52mr5Yaa4jhWGytzc/)

## Tech stack

HTML5, SCSS (BEM, partials), vanilla JS (ES modules), Vite, Swiper, Cypress

## What is inside

- **Header with a hamburger menu** — a `data-fls-menu-open` attribute on `<html>` drives the
  panel, the burger turns into a cross itself, page scroll is locked with scrollbar-width
  compensation, and the menu closes on a nav link or `Esc`.
- **Responsive at 320 / 640 / 768 / 1280** — the values are taken from the design via the
  Figma REST API. The page is capped at 1440px and centred; no horizontal scroll from 320px up.
- **Gallery** — a 370/770 grid on desktop and a looped Swiper slider below 1280 with round
  arrows and clickable pagination. Clicking a photo opens it in a lightbox scaled to the
  viewport (`object-fit: contain`), closed by the cross, a backdrop click or `Esc`.
- **Scroll reveal** — `IntersectionObserver`, one-shot, staggered through `--reveal-delay`;
  it honours `prefers-reduced-motion` and the content stays visible with JS disabled.
- **Subscription form** — cannot be submitted empty (`type="email"` + `required`), and resets
  itself without reloading the page.
- Smooth anchor scrolling, hover states on every interactive element, and a zoom-on-hover
  effect on the gallery and exhibition photos.

## Running locally

```bash
nvm use 20
npm install
npm start
```

Then open <http://localhost:5173/>.

## Checks

```bash
npm run lint     # stylelint + prettier + mate-scripts lint
npm test         # lint + Cypress
npm run build    # production build into /dist
npm run deploy   # publish the build to gh-pages
```
