import{login} from "../fixtures/selector"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe("Login page Test Scenarios", function () {
    this.beforeEach(function () {
        cy.visit("/")
    });
    it('valid login', function(){
        cy.wait(5000)
      cy.get(login.login).click();
      cy.get(login.emailField).click();
      cy.get(login.emailField).type(login.emailText);
      cy.get(login.passwordField).click();
      cy.get(login.passwordField).type(login.passwordText);
      cy.get(login.loginBtn).click();
      cy.wait(5000) 
   })
})