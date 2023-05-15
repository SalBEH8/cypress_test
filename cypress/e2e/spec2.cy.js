describe('Google search', () => {
  beforeEach(() => {
    cy.visit('https://www.google.fr/')
  })

  it('performs a search and displays 10 results', () => {
    const searchTerm = 'danse avec les stars'

    cy.get('#L2AGLb').click()

    cy.get('textarea.gLFyf').should('be.visible', { timeout: 10000 })

    cy.get('textarea.gLFyf').type(searchTerm)

    cy.get('input.gNO89b').click()

    cy.get('#search').should('be.visible', { timeout: 10000 })

    cy.get('#search .g').should('have.length', 10)
    
    cy.get('#search .g').each(($result) => {
        cy.wrap($result).find('a').should('exist')
    })
  })
})
