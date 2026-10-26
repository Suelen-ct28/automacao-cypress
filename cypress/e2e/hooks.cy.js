describe('Hooks', () => {
  before(() => {
    cy.log('Executa somente antes de todos os testes')
  })

  beforeEach(() => {
    cy.log('Executa antes de cada um dos testes')
  })

  afterEach(() => {
    cy.log('Executa depois de cada um dos testes')
  })

  after(() => {
    cy.log('Executa somente depois de todos os testes')
  })

  it('Teste 1', () => {
    cy.log('**Executa o Teste 1**')
  })

  it('Teste 2', () => {
    cy.log('**Executa o Teste 2**')
  })

  it('Teste 3', () => {
    cy.log('**Executa o Teste 3**')
  })

})
