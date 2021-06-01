describe("My first test", () => {
  it("Should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });
});
describe("Addition operator", () => {
  it("should equal 10", () => {
    cy.get(".button-number").contains(5).click();
    cy.get(".button-operator").contains("+").click();
    cy.get(".button-number").contains(5).click();
    cy.get(".button-operator").contains("=");
  });
});
describe("clear display", () => {
  it("should clear the display", () => {
    cy.get(".button-operator").contains("AC").click.clear;
  });
});
