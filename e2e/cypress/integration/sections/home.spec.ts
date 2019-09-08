/// <reference types="cypress" />

describe("Home section", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should open home page", () => {
    cy.url().should("include", "http://localhost:3000");
    expect(cy.contains("Blockchain Analytic Dashboard")).to.exist;
  });

  it("Should open home page link", () => {
    cy.get("a").click();
  })
});