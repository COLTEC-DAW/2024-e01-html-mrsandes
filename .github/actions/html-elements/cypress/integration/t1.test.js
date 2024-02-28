describe('T1. About Me Page', () => {
    beforeEach(() => {
      cy.visit('/about-me.html');
    });
  
    it('should have a title', () => {
      cy.get('title')
        .should('exist');
    });
   
    it('should have the correct h1 title', () => {
      cy.get('h1')
        .should('exist');
    });
    
    it('should have at least two paragraphs', () => {
      cy.get('p')
        .should('have.length.at.least', 2);
    });
});