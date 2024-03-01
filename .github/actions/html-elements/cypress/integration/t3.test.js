describe('T3: Sistema Solar', () => {
    it('Deve ter o arquivo da página com o nome correto', () => {
      cy.visit('/sistema-solar.html')
    })
  
    it('Deve ter um cabeçalho, uma seção principal e um rodapé', () => {
      cy.visit('/sistema-solar.html')
      cy.get('header').should('exist')
      cy.get('main').should('exist')
      cy.get('footer').should('exist')
    })
  
    it('Deve ter um título principal e um subtítulo no cabeçalho', () => {
      cy.visit('/sistema-solar.html')
      cy.get('header h1').should('exist')
      cy.get('header h2').should('exist')
    })
  
    it('Deve ter pelo menos 8 elementos <section> na seção principal', () => {
      cy.visit('/sistema-solar.html')
      cy.get('main section').should('have.length.gte', 8)
    })
  
    it('Cada seção deve ter um título com o nome do planeta e um parágrafo com as características', () => {
      cy.visit('/sistema-solar.html')
      cy.get('main section').each(($section) => {
        cy.wrap($section).find('h3').should('exist')
        cy.wrap($section).find('p').should('exist')
      })
    })
  
    it('Deve ter um link para e-mail e um link para redes sociais no rodapé', () => {
      cy.visit('/sistema-solar.html')
      cy.get('footer a[href^="mailto:"]').should('exist')
      cy.get('footer a[href^="https://"]').should('exist')
    })
  })