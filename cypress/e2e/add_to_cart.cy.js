import LoginPage from '../support/pages/LoginPage'
import InventoryPage from '../support/pages/InventoryPage'
import CartPage from '../support/pages/CartPage'

describe('SauceDemo Add to Cart', () => {
    it('adds an item to the cart and verifies it', () => {
        cy.fixture('users').then((users) => {
            const user = users.validUser

            LoginPage.visit()
            LoginPage.login(user.username, user.password)

            InventoryPage.addItemToCart(InventoryPage.addToCartSauceLabsBackpack)
            InventoryPage.getCartBadge().should('have.text', '1')
            InventoryPage.openCart()

            CartPage.getCartItem('Sauce Labs Backpack').should('be.visible')
        })
    })
})
