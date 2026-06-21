describe('Scroll Functionality Tests', () => {
  beforeEach(() => {
    // Set desktop viewport
    cy.viewport(1280, 900);
    // Disable smooth scrolling and animations for instant, reliable assertions
    cy.visit('http://localhost:5174/', {
      onBeforeLoad(win) {
        win.addEventListener('stylesLoaded', () => {
          const style = win.document.createElement('style');
          style.innerHTML = `
            html, body {
              scroll-behavior: auto !important;
            }
            * {
              transition: none !important;
              animation: none !important;
            }
          `;
          win.document.head.appendChild(style);
        });
      }
    });
  });

  it('should have vertical scroll on the main page', () => {
    cy.window().then((win) => {
      const doc = win.document;
      const scrollHeight = doc.documentElement.scrollHeight;
      const clientHeight = doc.documentElement.clientHeight;
      
      cy.log(`Scroll Height: ${scrollHeight}px`);
      cy.log(`Client Height: ${clientHeight}px`);
      
      // Page must be scrollable vertically
      expect(scrollHeight).to.be.greaterThan(clientHeight);
    });
  });

  it('should scroll to sections when clicking header links', () => {
    // On desktop, the drawer navigation works by checking the toggle #burger-toggle
    cy.get('#burger-toggle').check({ force: true });
    
    // Inject style to ensure scroll-behavior: auto is applied
    cy.window().then((win) => {
      const style = win.document.createElement('style');
      style.innerHTML = 'html { scroll-behavior: auto !important; }';
      win.document.head.appendChild(style);
    });

    // Click "Галерея" link
    cy.get('a[href="#gallery"]').first().click({ force: true });
    cy.wait(200);

    // Verify window is scrolled down
    cy.window().then((win) => {
      expect(win.scrollY).to.be.greaterThan(100);
    });

    // Check gallery section is visible
    cy.get('#gallery').then(($el) => {
      const rect = $el[0].getBoundingClientRect();
      expect(rect.top).to.be.closeTo(0, 10);
    });
  });

  it('should scroll to top when clicking the scroll-to-top button', () => {
    // Set viewport to tablet/mobile to test the button
    cy.viewport(768, 900);
    
    cy.window().then((win) => {
      const style = win.document.createElement('style');
      style.innerHTML = 'html { scroll-behavior: auto !important; }';
      win.document.head.appendChild(style);
    });

    // Scroll to bottom
    cy.scrollTo('bottom');
    cy.wait(200);

    cy.window().then((win) => {
      expect(win.scrollY).to.be.greaterThan(500);
    });

    // Click the scroll-to-top button
    cy.get('#scroll-top-btn').click({ force: true });
    cy.wait(200);

    cy.window().then((win) => {
      expect(win.scrollY).to.be.closeTo(0, 5);
    });
  });
});
