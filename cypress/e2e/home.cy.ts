import comics from "../fixtures/marvelComicsMock";
describe("Fluxos principais Home", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/**", comics).as("getComics");
    cy.visit("http://localhost:3000/");
  });

  it("Carrega a Home e exibe HQs da API", () => {
    cy.wait("@getComics");
    cy.get('[data-testid="comic-card"]').should("have.length.greaterThan", 0);
  });
});
