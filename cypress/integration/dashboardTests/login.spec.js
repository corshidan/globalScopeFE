describe('login testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('logs in with correct email and password', () => {
        cy.get("[dataTestId='emailInput']").type("elly@soc.com")

        cy.get("[dataTestId='passwordInput']").type("eleanor")

        cy.get("[dataTestId='loginButton']").click()

        cy.wait(1000)

    })

    // it('does not log in with incorrect email and password and displays alert', () => {
    //     cy.get("[dataTestId='emailInput']").type("fred@soc.com")

    //     cy.get("[dataTestId='passwordInput']").type("fredfred")

    //     cy.get("[dataTestId='loginButton']").click()

    //     cy.wait(1000)

    //     cy.get("[dataTestId='incorrectDetailsAlert']").contains("E-mail or password is invalid")

    // })


})