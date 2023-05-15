describe("quest 2", ()=>{
    it("Back Market", ()=>{
        cy.visit("https://preprod.backmarket.fr/register");

        cy.get('[data-qa="accept-cta"]').click();

        cy.get("#firstName").type("Salem");

        cy.get("#lastName").type("BEHATT");

        cy.get("#signup-email").type("salbehaax@gmail.com");

        cy.get("#signup-password").type("12081987Sb/");

        cy.get('[data-qa="signup-submit-button"]').should('be.visible').click();
    })
})
