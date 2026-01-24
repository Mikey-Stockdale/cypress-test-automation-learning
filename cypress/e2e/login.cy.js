describe('SauceDemo Login', () => {
    
  it('logs in with a valid user', () => {
    cy.visit('/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', 'inventory')
  })
})