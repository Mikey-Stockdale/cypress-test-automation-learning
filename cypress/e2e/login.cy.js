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

  it('shows an error for invalid credentials', () => {
    cy.fixture('users').then((users) => {
      const user = users.invalidUser

      LoginPage.visit()
      LoginPage.login(user.username, user.password)

      cy.get('.error-message-container')
        .should('be.visible')
        .and('contain.text', 'Username and password do not match')
    })
  })
})