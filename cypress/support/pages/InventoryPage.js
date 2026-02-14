class InventoryPage {
    addToCartSauceLabsBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]'
    cartLink = '[data-test="shopping-cart-link"]'
    cartBadge = '[data-test="shopping-cart-badge"]'

    addItemToCart(selector) {
        cy.get(selector).click()
    }

    getCartBadge() {
        return cy.get(this.cartBadge)
    }

    openCart() {
        cy.get(this.cartLink).click()
    }
}

export default new InventoryPage()
