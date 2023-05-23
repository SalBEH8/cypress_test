function login(username, password) {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
  }
  
  describe('Test de connexion à Saucedemo', () => {
    it('Scénario 1: Connexion avec des informations valides', () => {
      login('standard_user', 'secret_sauce')
      cy.url().should('include', '/inventory.html')
    })
  
    it('Scénario 2: Connexion avec un mauvais mot de passe', () => {
      login('standard_user', 'secret_david')
      cy.get('.error-message-container').then((messageContainer) => {
        console.log(messageContainer.text());
    });
  
    it('Scénario 3: Connexion avec un nom d’utilisateur invalide', () => {
      login('standardezrez', 'secret_sauce')
      cy.get('.error-message-container').should('contain', 'Invalid username')
    })
  
    it('Scénario 4: Connexion avec un utilisateur verrouillé', () => {
      login('locked_out_user', 'secret_sauce')
      cy.get('.error-message-container').should('contain', 'User is locked')
    })
  })  
  })