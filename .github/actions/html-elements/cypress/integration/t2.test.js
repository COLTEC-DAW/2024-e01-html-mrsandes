describe('T2: Página de Notícias', () => {
    it('Verifica se a página possui o título principal', () => {
        cy.visit('/noticia.html')
        cy.get('h1').should('exist')
    })

    it('Verifica se a página possui subtítulo', () => {
        cy.visit('/noticia.html')
        cy.get('h2').should('exist')
    })

    it('Verifica se a página possui pelo menos quatro parágrafos', () => {
        cy.visit('/noticia.html')
        cy.get('p').should('have.length.at.least', 4)
    })

    it('Verifica se a página possui pelo menos 6 elementos de formatação', () => {
        cy.visit('/noticia.html')
        cy.get('b, i, a').should('have.length.at.least', 6)
    })
})