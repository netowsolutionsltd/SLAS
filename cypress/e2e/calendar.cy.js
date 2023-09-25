import{calendar} from "../fixtures/selector"

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let number = parseInt(Math.random()*10000000, 10);
let phone_number = '090' + number;
let employeename = 'Idowu Bunmeey_ Christy';
let email = phone_number + '@yopmail.com';
let password = 'Bamikole1@.!@#QWErt';
let confirmpassword = 'Bamikole1@.!@#QWErt';

describe("Login page Test Scenarios", function () {
    this.beforeEach(function () {
        cy.visit("/")
    });
    it('valid login', function(){
        //Apply now button
        cy.get('.flex > a > .inline-flex').click()

        cy.get(':nth-child(1) > .relative > .flex').click()
        cy.get(':nth-child(1) > .relative > .flex').type('SAM001101')
       // 03/23/1994
       //calendar button
       cy.get(':nth-child(2) > .inline-flex').click({force: true})
       //month
        cy.get('.rdp-dropdown_month > .rdp-dropdown').select('March')
        //year
       cy.get('.rdp-dropdown_year > .rdp-dropdown').select('1994')
       //date
       cy.get(':nth-child(4) > :nth-child(4) > .rdp-button_reset').click()
       //verify button
       cy.get('.gap-2 > .justify-center').click({force: true })
       //continue to email verification
       cy.wait(4000)
       cy.get('.gap-2 > .justify-center').click({force: true })
       cy.wait(3000)
       //setup email address
       //email address
       cy.get('#email').click()
       cy.get('#email').type(email)
       //password
       cy.get('#password').click()
       cy.get('#password').type(password)
       //confirm password
       cy.get('#confirm_password').click()
       cy.get('#confirm_password').type(confirmpassword)
       //create account button
       cy.get('.inline-flex').click()
       
     })
})