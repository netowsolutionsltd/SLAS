import{dashboard} from "../fixtures/selector.js"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
const access = require("./validLogin.cy.js");
describe("Login page Test Scenarios", function () {
    beforeEach(function () {
        cy.visit("/")
        access.validLogin();
    });
    it('DASHBOARD', function(){
        cy.get(dashboard.dashboardBtn).click()
   })
})