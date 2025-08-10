import comics from "../fixtures/marvelComicsMock";
describe("Principais fluxos", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/**", comics).as("getComics");
    cy.visit("http://localhost:3000/");
  });

  it("Fluxo Home → Details → Cart", () => {
    cy.wait("@getComics");
    cy.get('[data-testid="comic-card"]').first().click();
    cy.url().should("include", "/detalhes");
    cy.get("button")
      .contains(/carrinho/i)
      .click();
    cy.url().should("include", "/carrinho");
    cy.get('[data-testid="cart-item"]').should("have.length.greaterThan", 0);
  });

  it("Fluxo Home → Cart direto", () => {
    cy.wait("@getComics");
    cy.get('[data-testid="add-to-cart"]').click();
    cy.url().should("include", "/carrinho");
    cy.contains(/carrinho/i);
  });
});
