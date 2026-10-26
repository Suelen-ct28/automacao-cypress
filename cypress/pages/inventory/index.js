import { elements as el } from './elements'

class Inventory {
    
    validarAcessoPagina() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html') 

        cy.screenshot('Acesso a página de inventário')

    }

    adicionarProduto(itemName) {
        cy.get(el.addToCart(itemName)).click()
    }

    removerProduto(itemName) {
        cy.get(el.removeFromCart(itemName)).click()
    }
}

export default new Inventory()