describe('Busca de produtos - KaBuM', () => {
  beforeEach(() => {
    cy.visit('https://www.kabum.com.br');
    fecharCookiesSeExistir();
  });

  it('Deve pesquisar por processador e aplicar filtro AMD', () => {
    pesquisarProduto('processador');
    validarResultadosBusca();
    filtrarPorAMD();
    filtrarPorFretegrátis();
  });
});

//Funções auxiliares!!!!

function fecharCookiesSeExistir() {
  cy.get('body').then(($body) => {
    const botao = $body.find('button:contains("Entendi")');

    if (botao.length) {
      cy.wrap(botao).click({ force: true });
    }
  });
}

function pesquisarProduto(produto) {
  cy.log(`🔎 Buscando por: ${produto}`);

  cy.get('input[placeholder*="Busque"]')
    .should('be.visible')
    .clear()
    .type(produto)
    .type('{enter}');

  // cy.location('search', { timeout: 15000 }).should('contain', produto);
  cy.location('pathname', { timeout: 15000 }).should('include', produto);
}

function validarResultadosBusca() {
  cy.log('📦 Validando resultados');

  cy.get('a[href*="/produto/"]', { timeout: 15000 })
    .should('exist')
    .and('have.length.greaterThan', 0);
}

function filtrarPorAMD() {
  cy.log('Aplicando filtro AMD');

  cy.contains('a', 'Processador AMD').should('be.visible').click();

  cy.location('pathname').should('include', 'processador-amd');
}

function filtrarPorFretegrátis() {
  cy.log('Teste de filtro de frete Gratis');
  cy.get('.sc-f1240e4d-3').click();
  cy.log('CLicar no botão de frete gratis');
  cy.get(':nth-child(1) > .sc-fodVek').click();
  cy.get(':nth-child(1) > .sc-fodVek').should('be.checked');
  cy.contains('Aplicar filtro').click();
}
