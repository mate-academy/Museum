# NA MU — National Art Museum of Ukraine

## Brief Project Description

NA MU is a responsive landing page concept inspired by the National Art Museum of Ukraine.
The project presents current exhibitions and lectures, includes an interactive gallery slider, a newsletter subscription form, social links, contact information, and working hours. The main goal of the project was to practice modern responsive layout techniques, semantic HTML, accessibility basics, and CSS-first interactivity.

## Technologies Used

- HTML5 (semantic markup)
- CSS3
- SCSS / Sass
- BEM methodology
- Google Fonts (IBM Plex Sans, Montserrat)
- JavaScript (ES6+)
- Vite
- Stylelint
- Prettier

## Features

- Responsive mobile-first layout (320px → 768px → 1280px)
- CSS Grid layout system (2 → 6 → 12 columns across breakpoints)
- CSS-only burger menu using `:target` and `:has()` — no JavaScript
- Animated overlay backdrop controlled entirely via CSS `:has()` selector
- JS gallery slider built on `IntersectionObserver` API with dot navigation
- CSS `scroll-snap-type: x mandatory` for precise swipe control
- `prefers-reduced-motion` support: globally via CSS and in scroll behavior
- Instagram icon with SVG gradient reveal animation on hover
- Facebook / Instagram social links via SVG sprite (`<use>`)
- Semantic HTML5 (`<article>`, `<figure>`, `<address>`, `<time>`, `<dl>/<dt>/<dd>`, `<aside>`)
- Accessibility improvements: aria-label, aria-current, and visually-hidden text
- Touch-friendly interactions via `@media (hover: hover)`
- `scrollbar-gutter: stable` to prevent layout shift on scroll
- Modular SCSS architecture (blocks/, utils/)

## Preview

- [DEMO LINK](https://Alex3777-prog.github.io/Museum/)

## Design Reference

- [Figma design](https://www.figma.com/file/cRBCqE06cDrY3s4jX7h3iY/%D0%9D%D0%90%D0%9C%D0%A3-(Edit)?node-id=0%3A1)

