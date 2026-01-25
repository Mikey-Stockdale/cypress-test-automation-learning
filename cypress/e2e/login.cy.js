import LoginPage from '../support/pages/LoginPage'

describe('SauceDemo Login', () => {
  it('logs in with a valid user', () => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')

    cy.url().should('include', 'inventory')
  })
})