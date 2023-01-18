describe('Frontend Angular Test', () => {
  const url = 'http://localhost:4200/list'
  
  it('Clicando no botão de avançar página', () => {
    cy.visit(url)
    cy.log('Clicando no botão de avançar página')
    cy.wait(1500)
    cy.get('#after').click({force: true})
    cy.wait(500)
    cy.get('#after').click({force: true})
    cy.wait(500)
  })

  it('Clicando no botão que vai para a última página', () => {
    cy.visit(url)
    cy.wait(1000)
    cy.get('#last').click({force: true})
  })

  it('Clicando no botão que vai para a primeira página', () => {
    cy.visit(url)
    cy.wait(1000)
    cy.get('#first').click({force: true})
  })

  it('Acessando página aleatória da paginação', () => {
    cy.visit(url)
    cy.wait(1000)
    cy.get('pagination > div > :nth-child(9)').click({force: true})
  })

  it('Pesquisar ano 2003 no Filtro', () => {
    cy.visit(url)
    cy.wait(1000)
    cy.get('.searchbar-input').type('2003')
    cy.log('Apagando ano de pesquisa')
    cy.wait(4000)
    cy.get('.searchbar-clear-button').click()
  })

  it('Filtrando por Ganhador', () => {
    cy.visit(url)
    cy.wait(1000)
    cy.get('#filter-winner').click({force: true})
    cy.wait(500)
    cy.get('#alert-input-1-0 > .alert-button-inner').click({force: true})
    cy.get('.alert-button-group > :nth-child(2)').click({force: true})
    cy.wait(1000)
  })

  it('Filtrando por Não-Ganhador', () => {
    cy.visit(url)
    cy.wait(1000)
    cy.get('#filter-winner').click({force: true})
    cy.get('#alert-input-1-1 > .alert-button-inner').click({force: true})
    cy.get('.alert-button-group > :nth-child(2)').click({force: true})
    cy.wait(1000)
  })
})