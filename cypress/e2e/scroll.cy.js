describe('Horizontal Scroll Check', () => {
  const resolutions = [768, 800, 900, 1024, 1025, 1100, 1200, 1280, 1366, 1440, 1600, 1920];

  resolutions.forEach((width) => {
    it(`should not have horizontal scroll at width ${width}px`, () => {
      // Set viewport
      cy.viewport(width, 900);

      // Visit local server
      cy.visit('http://localhost:5174/');

      // Wait a moment for layout to settle/render images
      cy.wait(500);

      // Check for overflow
      cy.window().then((win) => {
        const doc = win.document;
        const html = doc.documentElement;
        const body = doc.body;

        // Temporarily remove overflow-x: hidden to get accurate scrollWidth
        html.style.overflowX = 'visible';
        body.style.overflowX = 'visible';

        const windowWidth = win.innerWidth;
        const htmlScrollWidth = html.scrollWidth;
        const bodyScrollWidth = body.scrollWidth;

        cy.log(`Viewport Width: ${windowWidth}px`);
        cy.log(`HTML Scroll Width: ${htmlScrollWidth}px`);
        cy.log(`Body Scroll Width: ${bodyScrollWidth}px`);

        // Check if there is overflow
        const hasOverflow = htmlScrollWidth > windowWidth || bodyScrollWidth > windowWidth;

        if (hasOverflow) {
          // Find which elements are overflowing
          const overflowingElements = [];
          const allElements = doc.querySelectorAll('*');
          
          allElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            // If the element's right edge is further right than the window width,
            // and it is not a fixed/absolute container that is supposed to be full screen
            if (rect.right > windowWidth) {
              // Get selector or class name
              const className = el.className || '';
              const id = el.id || '';
              const tagName = el.tagName.toLowerCase();
              const selector = `${tagName}${id ? '#' + id : ''}${className ? '.' + className.split(' ').join('.') : ''}`;
              
              // Only log if it's a visible element that has layout size
              if (rect.width > 0 && rect.height > 0) {
                overflowingElements.push({
                  selector,
                  left: rect.left,
                  right: rect.right,
                  width: rect.width,
                });
              }
            }
          });

          cy.log('Overflowing Elements:', JSON.stringify(overflowingElements, null, 2));
          
          // Throw error so the test fails and lists the overflowing elements
          const elementDetails = overflowingElements
            .map((el) => `${el.selector} (left: ${el.left}px, right: ${el.right}px, width: ${el.width}px)`)
            .join('\n');
          throw new Error(`Horizontal scroll detected at ${width}px. Overflowing elements:\n${elementDetails}`);
        }

        // Assert no overflow
        expect(htmlScrollWidth).to.be.at.most(windowWidth);
        expect(bodyScrollWidth).to.be.at.most(windowWidth);
      });
    });
  });
});
