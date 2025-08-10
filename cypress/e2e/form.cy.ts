import comics from "../fixtures/marvelComicsMock";
describe("Fluxos principais Form", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/**", comics).as("getComics");
    cy.visit("http://localhost:3000/");
  });

  it("Realizar pesquisa no formulário", () => {
    cy.wait("@getComics");
    cy.get('input[placeholder="Digite o nome de uma HQ"]').type("spider");
    cy.get("form").submit();
    cy.get('[data-testid="comic-input"]').should("exist");
  });

  it("Validação do formulário", () => {
    cy.get("form").submit();
    cy.contains("Campo obrigatório!").should("be.visible");
  });
});
