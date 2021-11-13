describe('registration testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


//test for when you click on the register link that the page displays the sign-up form.
    it('takes you to the sign-up input fields', () => {
        cy.get("[dataTestId='registerLink']").click()

        cy.get("")


    })

})