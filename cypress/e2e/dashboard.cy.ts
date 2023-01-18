describe('Frontend Angular Test', () => {
  const url = 'http://localhost:4200/'
  it('Pesquisando ganhadores do "ano 2000"', () => {
    cy.visit(url)
    cy.get(':nth-child(1) > .item').click({force: true})
    cy.get('.searchbar-input').type('2000')
    cy.get('.button-search').click({force: true})
    cy.log('Observe a resposta do servidor na lista...')
    cy.wait(2000)
  })

  it('Procurando ganhadores do "Ano 2005"', () => {
    cy.visit(url)
    cy.get(':nth-child(1) > .item').click({force: true})
    cy.get('.searchbar-clear-button').click({force: true})
    cy.get('.searchbar-input').type('2005')
    cy.get('.button-search').click({force: true})
    cy.log('Observe a resposta do servidor na lista...')
    cy.wait(2000)
  })
})