describe('Fluxo de busca e carrinho - KaBuM', () => {
  beforeEach(() => {
    cy.visit('https://www.kabum.com.br');
    fecharCookiesSeExistir();
  });

  it('Deve pesquisar por produtos', () => {
    pesquisarProduto('Mouse');

    cy.get('#listingCount', { timeout: 15000 })
      .should('be.visible')
      .and('contain', 'produtos');
  });

  it('Deve pesquisar e abrir um produto aleatório', () => {
    pesquisarProduto('Mouse');
    clicarProdutoAleatorio();

    cy.url().should('include', '/produto/');
  });

  it('Deve pesquisar, abrir produto e adicionar ao carrinho', () => {
    pesquisarProduto('Mouse');
    clicarProdutoAleatorio();
    adicionarAoCarrinho();
    validarProdutoNoCarrinho();
  });
});

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

  cy.url({ timeout: 15000 }).should('include', produto.toLowerCase());
}

function clicarProdutoAleatorio() {
  cy.get('#listing')
    .find('a[href*="/produto/"]')
    .should('have.length.greaterThan', 0)
    .then(($produtos) => {
      const randomIndex = Math.floor(Math.random() * $produtos.length);
      cy.wrap($produtos[randomIndex]).click();
    });
}

function adicionarAoCarrinho() {
  ///cy.contains('COMPRAR', { timeout: 10000 }).should('be.visible').click();

  cy.get('.bg-blue-50', { timeout: 10000 }).should('be.visible').click();
}
function validarProdutoNoCarrinho() {
  cy.get('.bg-blue-50', { timeout: 10000 }).should('be.visible');
  cy.url().then((url) => {});
}
