1. Add a favicon
2. Don’t forget to add a title for the whole web page (it could be the name of your landing)
3. All Logos on the page should be links to home page
4. Change text color on hover for phone, email and address
5. When you click on phone icon or phone number in contacts section, make sure that there is no 404 error, make it a real link to start a call on device
6. Same when you click on logo. There shouldn't be any error.
7. When clicking on any location / address - prevent errors and make it to open location in Google Maps
8. Pictures in Gallery should increase on hover
9. Location-related addresses / links should open google maps in a new tab `target="_blank"`
10. Apply `:hover` effect for images on page (testimonials / gallery, other sections).
11. Make sure everything looks neat on mobile and without horizontal scrolling
12. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
13. Placeholders in the forms suggest what to enter; apply validation of the form fields (`required`, `email / tel etc.`), then it is clear in what format to enter the data
14. Form shouldn't be submitted if some of the fields are not filled
15. Page shouldn't be reloaded on form submit (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
16. Add a smooth scroll for the whole page
17. Fix menu for small screens (if there is not enough space for all the menu items)
    ```css
    .menu {
      /* Move these rules from .menu__content */
      box-sizing: border-box;
      height: 100vh;
      padding: 24px 0;

      background-color: #0075ff;

      /* Add this rule to add scroll when there is not enough space */
      overflow-y: auto;

      ...
    ```
18. To disable page scrolling under the menu add the next code
    ```css
    .page__body--with-menu {
      overflow: hidden;
    }
    ```
    ```js
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#menu') {
        document.body.classList.add('page__body--with-menu');
      } else {
        document.body.classList.remove('page__body--with-menu');
      }
    });
    ```
19. Remember to reset default margins for headings (h1, h2, h3, etc.).
* Only for Miami: Make sure that ```<h1>``` is positioned exactly 80px from the bottom of the header.
