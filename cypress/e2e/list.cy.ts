describe('Frontend Angular Test', () => {
  it('Go to List Page', () => {
    cy.visit('http://localhost:4200/')

    cy.log('Clicando no item "List" do menu lateral')
    cy.wait(1000)
    cy.get(':nth-child(2) > .item').click()

    cy.log('Clicando no botão de avançar página')
    cy.wait(1500)
    cy.get('#after').click({force: true})
    cy.wait(500)
    cy.get('#after').click({force: true})
    cy.wait(500)

    cy.log('Clicando no botão que vai para a última página')
    cy.wait(1000)
    cy.get('#last').click({force: true})

    cy.log('Clicando no botão que vai para a primeira página')
    cy.wait(1000)
    cy.get('#first').click({force: true})
    
    cy.log('Acessando a página 7 da paginação')
    cy.wait(1000)
    cy.get('pagination > div > :nth-child(9)').click()

    cy.log('Pesquisar ano 2003 no Filtro')
    cy.wait(1000)
    cy.get('.searchbar-input').type('2003')

    cy.log('Apagando o filtro de ano e filtrando por Ganhador')
    cy.wait(1500)
    cy.get('.searchbar-clear-button').click()
    cy.get('#filter-winner').click({force: true})
    cy.wait(200)
    cy.get('#alert-input-1-0 > .alert-button-inner').click({force: true})
    cy.get('.alert-button-group > :nth-child(2)').click({force: true})

    cy.log('Filtrando por não ganhador')
    cy.wait(1000)
    cy.get('#filter-winner').click({force: true})
    cy.get('#alert-input-2-1 > .alert-button-inner').click()
    cy.get('.alert-button-group > :nth-child(2)').click({force: true})

  })
})