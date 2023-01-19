/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
        visit_page(page?: string): Chainable<any>;
    }
}

beforeEach(() => {
    cy.visit_page()
})

Cypress.Commands.add('visit_page', (page?: string) => {
    cy.visit(`http://localhost:4200/${page ? page : ''}`)
})