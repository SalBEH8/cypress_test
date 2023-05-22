const testData = require('../fixtures/testData.json');

// identifiant
const uuid = () => Cypress._.random(0, 1e6); // Universally Unique Identifier vien avec Node
const id = uuid(); // integree comme variable

// Commande personnalisée pour la connexion
Cypress.Commands.add('login', (email, password) => {
    cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', {
        email,
        password
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.email).to.eq(email);
        expect(response.body.data).to.have.property('token');
    });
});

describe('API tests', () => {
    it('Health check', () => {
        cy.request('GET', 'https://practice.expandtesting.com/notes/api/health-check').then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it('creates a new user', () => {

        // permet de crée le random User et PSd
        
        const newUser = { 
            name: `TestUser${id}`,
            email: `test${id}@example.com`,
            password: `TestPassword${id}`
        };
        cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/register', newUser).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.data.name).to.eq(newUser.name);
            expect(response.body.data.email).to.eq(newUser.email);
        });
    });

    it('logs in a user', () => {
        // réutilisé pour le relog
        const { email, password } = testData.userLogin;
        cy.login(email, password);
    });

    it('bad login', () => {
        const badUser = { email: testData.badUser.email, password: testData.badUser.password };
        cy.request({
            method: 'POST',
            url: 'https://practice.expandtesting.com/notes/api/users/login',
            body: badUser,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });
});
