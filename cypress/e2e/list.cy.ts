describe('Frontend Angular Test', () => {
    it('Clicando no botão de avançar página', () => {
    cy.visit_page('list')
    cy.log('Clicando no botão de avançar página')
    cy.wait(1500)
    cy.get('#after').click({force: true})
    cy.wait(500)
    cy.get('#after').click({force: true})
    cy.wait(500)
  })

  it('Clicando no botão que vai para a última página', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('#last').click({force: true})
  })

  it('Clicando no botão que vai para a primeira página', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('#first').click({force: true})
  })

  it('Acessando página aleatória da paginação', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('pagination > div > :nth-child(9)').click({force: true})
  })

  it('Pesquisar ano 2003 no Filtro', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('.searchbar-input').type('2003')
    cy.log('Apagando ano de pesquisa')
    cy.wait(2000)
    cy.get('.searchbar-clear-button').click()
  })

  it('Filtrando por Ganhador', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('#filter-winner').click({force: true})
    cy.wait(500)
    cy.get('#alert-input-1-0 > .alert-button-inner').click({force: true})
    cy.get('.alert-button-group > :nth-child(2)').click({force: true})
    cy.wait(500)
  })

  it('Filtrando por Não-Ganhador', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('#filter-winner').click({force: true})
    cy.get('#alert-input-1-1 > .alert-button-inner').click({force: true})
    cy.get('.alert-button-group > :nth-child(2)').click({force: true})
    cy.wait(500)
  })

  it('Pesquisar ano 1800 no Filtro', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('.searchbar-input').type('1800')
    cy.log('Apagando ano de pesquisa')
    cy.wait(2000)
    cy.get('.searchbar-clear-button').click()
  })

  it('Pesquisar ano 2050 no Filtro', () => {
    cy.visit_page('list')
    cy.wait(500)
    cy.get('.searchbar-input').type('2050')
    cy.log('Apagando ano de pesquisa')
    cy.wait(2000)
    cy.get('.searchbar-clear-button').click()
  })
})