/// <reference types='cypress'/>

describe('Register page', () => {

    it("Check all elements on the register page", () => {
        
        cy.visit('register');
        cy.get("#first-name").type('Bojana');
        cy.get("#last-name").type('Mijuskovic');
        cy.get("#email").type('bojana@gmail.com');
        cy.get("#password").type('12345678');
        cy.get("#password-confirmation").type('12345678');
        cy.get(".form-check-input").click();
        cy.get(".btn-custom").click();
        cy.wait(2000);

})


it("Empty first name - NEG", () => {
        
    cy.visit('register');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

})

it("Empty last name - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

})

it("Empty email field - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

})

it("Empty password field - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

})

it("Empty password confirmation field - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);
})


 it("Wrong password confirmation - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('abcd1234');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);

})

it("Terms and conditions didnt accepted - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('12345678');
    cy.get("#password-confirmation").type('12345678');
    cy.get(".btn-custom").click();
    cy.wait(2000);
})


it("Password lower than 8 charachters - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('1234567');
    cy.get("#password-confirmation").type('1234567');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);
})

it("Password dont contains numbers - NEG", () => {
        
    cy.visit('register');
    cy.get("#first-name").type('Bojana');
    cy.get("#last-name").type('Mijuskovic');
    cy.get("#email").type('bojana@gmail.com');
    cy.get("#password").type('aaaabbbb');
    cy.get("#password-confirmation").type('aaaabbbb');
    cy.get(".form-check-input").click();
    cy.get(".btn-custom").click();
    cy.wait(2000);
})

})