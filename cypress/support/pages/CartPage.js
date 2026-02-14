class CartPage {
    cartItemName = '[data-test="inventory-item-name"]'

    getCartItem(name) {
        return cy.get(this.cartItemName).contains(name)
    }
}

export default new CartPage()
