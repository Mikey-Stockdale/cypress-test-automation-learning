import LoginPage from '../support/pages/LoginPage'

describe('SauceDemo Login', () => {
  it('logs in with a valid user', () => {
    cy.fixture('users').then((users) => {
      const user = users.validUser

      LoginPage.visit()
      LoginPage.login(user.username, user.password)

      cy.url().should('include', 'inventory')
    })
  })
})