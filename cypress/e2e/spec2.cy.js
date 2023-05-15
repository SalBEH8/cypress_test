describe('Google search', () => {
  beforeEach(() => {
    cy.visit('https://www.google.fr/')
  })

  it('performs a search and displays 10 results', () => {
    const searchTerm = 'football'

    // Accept cookies (if prompted)
    cy.get('#L2AGLb').click()

    // Wait for the search input to be visible
    cy.get('textarea.gLFyf').should('be.visible', { timeout: 10000 })

    // Type the search term in the input field
    cy.get('textarea.gLFyf').type(searchTerm)

    // Click on the search button
    cy.get('input.gNO89b').click()

    // Wait for the search results to load
    cy.get('#search').should('be.visible', { timeout: 10000 })

    // Assert that 10 search results are displayed
    cy.get('#search .g').should('have.length', 10)

    
    // Assert that each search result has a link
    cy.get('#search .g').each(($result) => {
        cy.wrap($result).find('a').should('exist')
    })
  })
})
