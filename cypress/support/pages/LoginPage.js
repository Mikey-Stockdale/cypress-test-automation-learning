class LoginPage {
  usernameInput = '#user-name'
  passwordInput = '#password'
  loginButton = '#login-button'

  visit() {
    cy.visit('/')
  }

  enterUsername(username) {
    cy.get(this.usernameInput).type(username)
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password)
  }

  clickLogin() {
    cy.get(this.loginButton).click()
  }

  login(username, password) {
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }
}

export default new LoginPage()