# Museum landing page
The 'Museum landing page' was implemented according to [Figma design](https://www.figma.com/file/cRBCqE06cDrY3s4jX7h3iY/%D0%9D%D0%90%D0%9C%D0%A3-(Edit)?node-id=0%3A1).

Link to preview: [DEMO LINK](https://tchuhai.github.io/Museum/).


- The design 1440px
- Desktop 1280px
- Tablet 640px
- Mobile (> 320px)

1. The landing page was made with HTML, CSS and JAvaScript programming languages, BEM technology and SCSS preprocessor.
2. To make the page look neat on desctop, tablet and mobile phones, the techniques of responsive design were applied: media qureries, calc() and clamp() functions, min- and max-width, min- and max-height, min-content and fit-content, fr-units, minmax, etc.
3. To position the elements Flex and Grid layout methods were used.
4. Reactions to user actions (on hover, on scroll, smooth scrolling) were added.
5. The links in the top and bottom menus lead to the corresponding landing blocks.
6. The speed of animations on the entire landing page is the same.
7. Placeholders in the forms suggest what to enter. If there is form validation, then it is clear in what format to enter data.
8. Links in the header and footer menus lead to the corresponding blocks of the landing page.
9. When trying to send the form, it is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded. The form isn’t submited empty.
10. The buttons "exhibitions" and "tickets" lead to the block with current events.
11. Facebook and Instagram icons in the footer are clickable and open the museum's social networks in a new tab.
12. Pictures in the gallery and exhibitions sections increase on hover.
13. A carousel slider for viewing pictures in the gallery was added (for tablet and mobile version) .



## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
5. Open one more terminal window for the next steps.
6. `git checkout -b develop` - to create new branch and switch on it.
7. Write you code in `src` folder.
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`.
10. `git add . && git commit -m 'solution'` to save your changes.
11. `git push origin develop` - to send you code for PR.
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://tchuhai.github.io/Museum/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.
