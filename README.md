# Museum landing page
Implement landing page according to [Figma design](https://www.figma.com/file/cRBCqE06cDrY3s4jX7h3iY/%D0%9D%D0%90%D0%9C%D0%A3-(Edit)?node-id=0%3A1) - Use BEM and SCSS

Check font styles. Use [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans?query=ibm), [Montserrat](https://fonts.google.com/specimen/Montserrat?query=mon)

- The design 1440px
- Desktop 1280px
- Tablet 640px
- Mobile (> 320px)

1. Implement the header with hamburger menu.
1. Implement `Художній Музей` block.
1. Implement `Актуальні події` block with two similar blocks `Йду і повертаюсь`, `І спогади і мрії`.
1. Implement `Від класицизму до романтизму` block.
1. Implement `Галерея` block and slider.
1. Implement `Підписка` block.
1. Implement footer.

## Checklist for preparing a portfolio project for HR review

1. Don’t forget to add a title for the whole web page (it could be the name of your landing)
2. A landing page is implemented strictly according to the design in Figma
4. Links in the header and footer menus should lead to the corresponding blocks of the landing page
5. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
6. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
7. Make sure everything looks neat on mobile and without horizontal scrolling
8. Add favicon
9. Add a smooth scroll for the whole page
10. When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
11. The form shouldn’t submit empty
12. The buttons "exhibitions" and "tickets" should lead to the block with current events
13. The button "about us" should lead to the email digest
14. Facebook and Instagram icons in the footer should be clickable and open the museum's social networks in a new tab
15. Pictures in the gallery and exhibitions sections should increase on hover
16. OPTIONAL: After everything is done, you can add a slider for viewing pictures in the gallery (for mobile version)


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
  [DEMO LINK](https://misha-shevchuk.github.io/Museum/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.
