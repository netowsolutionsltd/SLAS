import{login} from "../fixtures/selector.js"


export const validLogin = () =>  {
  cy.wait(5000)
  cy.get(login.login).click();
    cy.get(login.emailField).click();
    cy.get(login.emailField).type(login.emailText);
    cy.get(login.passwordField).click();
    cy.get(login.passwordField).type(login.passwordText);
    cy.get(login.loginBtn).click();
    cy.wait(5000)
};