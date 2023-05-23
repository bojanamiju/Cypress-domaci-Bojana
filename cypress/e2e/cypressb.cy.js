/// <reference types='cypress'/>

describe('Login page', () => {

    it("Check all elements on the register page", () => {
        
        cy.visit('register');
        cy.get("#first-name").type('Bojana');
        cy.get("#last-name").type('Mijuskovic');
        cy.get("#email").type('bojana@gmail.com');
        cy.get("#password").type('12345678');
        cy.get("#password-confirmation").type('12345678');
        cy.get(".form-check-input").click();
        cy.get(".btn-custom").click();

})

})