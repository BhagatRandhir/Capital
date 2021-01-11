import registration from '../../support/pageObjects/registration'

describe('my first script', function(){
    const registrationPage = new registration()
    beforeEach(function(){
        cy.fixture('getCapitalASIC').then(function(data)
        {
            this.data=data
        })
        cy.visit(Cypress.env('url'))
        
    })
    it('When record is available',  function(){
        cy.title().should('eq', this.data.Title)
        registrationPage.getSearchBox().type(this.data.validText)
        registrationPage.getDropdown().should('be.visible')
        registrationPage.getSearchBox().type('{downarrow}')
        registrationPage.getResultDropdown().click();
        registrationPage.getResultItem().click()
        registrationPage.getSuccessMessage().should('have.text','This business is eligible')
        registrationPage.getSuccessMessage().then(function(message){

            const msg = message.text()
            expect(msg.includes("This business is eligible")).to.be.true

        })

        registrationPage.submitButton().should('be.visible').click()
    })

    it('When record is not available', function(){

        registrationPage.getSearchBox().type(this.data.invalidText)
        cy.wait(2000)
        registrationPage.getResultDropdown().click()
        registrationPage.getNoResultFound().should('have.text','No business found')

    })
})