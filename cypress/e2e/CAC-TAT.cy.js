 describe('Site modelo para testes E2E', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  })

  it('verifica o titulo da aplicação', () => {
    cy.title().should('be.equal', 'Site modelo para testes E2E')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

    cy.get('#firstName').type('Amandinha')
    cy.get('#lastName').type('Brito')
    cy.get('#email').type('amandinha.brito@gmail.com')
    cy.get('#open-text-area').type('Obrigada!')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com email com formatação inválida', () => {
  cy.get('#firstName').type('Amandinha')
  cy.get('#lastName').type('Brito')
  cy.get('#email').type('amandinha.brito@gmail,com')
  cy.get('#open-text-area').type('Teste')
  cy.get('button[type="submit"]').click()

  cy.get('.error').should('be.visible')

    })

  it('preenche e limpa os campos nome, sobrenome email e telefone', () => {
    cy.get('#firstName')
        .type('Amandinha')
        .should('have.value','Amandinha' )
        .clear()
        .should('have.value', '')
    cy.get('#lastName')
        .type('Brito')
        .should('have.value','Brito' )
        .clear()
        .should('have.value', '')
    cy.get('#email')
        .type('amandinha.brito@gmail,com')
        .should('have.value','amandinha.brito@gmail,com' )
        .clear()
        .should('have.value', '')
    cy.get('#phone')
        .type('123456789')
        .should('have.value','123456789' )
        .clear()
        .should('have.value', '')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {

    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () =>{
    cy.get('#product' )
        .select('YouTube')
        .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor', () =>{
    cy.get('#product' )
        .select('mentoria')
        .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu indice', () =>{
    cy.get('#product' )
        .select(1)
        .should('have.value', 'blog')
  })

  it('marcar o tipo de atendimento "Feedback"', () =>{
    cy.get('input[type="radio"][value="feedback"]' )
        .check()
  })

  it('marcar cada tipo de atendimento', () =>{
    cy.get('input[type="radio"][value="ajuda"]' )
    cy.get('input[type="radio"][value="elogio"]' )
    cy.get('input[type="radio"][value="feedback"]' )
        .check()

  })

  it('marca ambos checkboxes, depois demarca o utlimo', () => {
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
  })

  it('selecione um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('./cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
   })

  it('verifica que a politica de privacidade abre em outra aba sem a necessidade de um clique', () =>{
    cy.contains('a', 'Política de Privacidade')
    .should('have.attr', 'href', 'privacy.html')
    .and('have.attr', 'target', '_blank')
      })

  it('acessa nova página de politica de privacidade removendo o target e então clicando no link', () =>{
    cy.contains('a', 'Política de Privacidade')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
    })
})