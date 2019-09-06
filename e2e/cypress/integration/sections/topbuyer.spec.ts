/// <reference types="cypress" />

describe("Top Buyer", () => {
  it("Show page text", () => {
    cy.visit("/top-buyer");
    cy.wait(2000);
    expect(cy.contains("Top buyer (amount of transactions)")).to.exist;
  });
});