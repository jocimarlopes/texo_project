describe('Frontend Angular Test', () => {
  it('Pesquisando ganhadores do "ano 2000"', () => {
    cy.get(':nth-child(1) > .item').click({force: true})
    cy.get('.searchbar-input').type('2000')
    cy.wait(500)
    cy.get('.button-search').click({force: true})
    cy.log('Observe a resposta do servidor na lista...')
    cy.wait(2000)
  })

  it('Pesquisando ganhadores do "Ano 2005"', () => {
    cy.get(':nth-child(1) > .item').click({force: true})
    cy.get('.searchbar-clear-button').click({force: true})
    cy.get('.searchbar-input').type('2005')
    cy.wait(500)
    cy.get('.button-search').click({force: true})
    cy.log('Observe a resposta do servidor na lista...')
    cy.wait(2000)
  })

  it('Pesquisando ganhadores do ano de 1800', () => {
    cy.get(':nth-child(1) > .item').click({force: true})
    cy.get('.searchbar-clear-button').click({force: true})
    cy.get('.searchbar-input').type('1800')
    cy.wait(500)
    cy.get('.button-search').click({force: true})
    cy.log('Observe a resposta do servidor na lista...')
    cy.wait(2000)
  })

  it('Pesquisando ganhadores do ano de 2050', () => {
    cy.get(':nth-child(1) > .item').click({force: true})
    cy.get('.searchbar-clear-button').click({force: true})
    cy.get('.searchbar-input').type('2050')
    cy.wait(500)
    cy.get('.button-search').click({force: true})
    cy.log('Observe a resposta do servidor na lista...')
    cy.wait(2000)
  })
})