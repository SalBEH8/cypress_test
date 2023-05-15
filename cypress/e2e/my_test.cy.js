describe('Back Market Registration and Authentication', () => {

    beforeEach(() => {
        cy.visit('https://preprod.backmarket.fr/register')
    })

    it('Successful Registration Scenario', () => {
        cy.get('input[id="lastName"]')
           .type('Dupont')

        cy.get('input[id="signup-email"]')
           .type('dupont@example.com')

        cy.get('input[id="signup-password"]')
           .type('21091987Sb/')

        // Ajoutez d'autres champs si nécessaire

        cy.get('button[id="YOUR_SUBMIT_BUTTON_ID"]') // Remplacer par l'identifiant du bouton de soumission
           .click()

        // Vérifiez que l'inscription a réussi
    })

    it('Failed Registration Scenario', () => {
        cy.get('input[id="lastName"]')
           .type('')

        cy.get('input[id="signup-email"]')
           .type('invalidEmail')

        cy.get('input[id="signup-password"]')
           .type('invalidPassword')

        // Ajoutez d'autres champs si nécessaire

        cy.get('button[id="YOUR_SUBMIT_BUTTON_ID"]') // Remplacer par l'identifiant du bouton de soumission
           .click()

        // Vérifiez que l'inscription a échoué
    })

    it('Authentication Test', () => {
        cy.visit('https://preprod.backmarket.fr/login') // Si l'URL de connexion est différente

        cy.get('input[id="YOUR_LOGIN_ID"]') // Remplacer par l'identifiant du champ d'email pour la connexion
           .type('example@example.com')

        cy.get('input[id="YOUR_LOGIN_PASSWORD_ID"]') // Remplacer par l'identifiant du champ de mot de passe pour la connexion
           .type('password')

        cy.get('button[id="YOUR_LOGIN_BUTTON_ID"]') // Remplacer par l'identifiant du bouton de connexion
           .click()

        // Vérifiez que l'authentification a réussi
    })
})
