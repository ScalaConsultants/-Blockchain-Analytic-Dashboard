/// <reference types="cypress" />

describe("Transactions", () => {
  beforeEach(() => {
    cy.visit("/transactions");
    cy.wait(2000);
  });

  it("Should page text exits", () => {
    expect(cy.contains('Transactions list')).to.exist;
  });

  it("Should filter by source", () => {
    cy.get(":nth-child(1) > label > input")
      .type("abc")
      .should("be.focused");
  });

  it("Should filter by destination", () => {
    cy.get(':nth-child(2) > label > input')
      .type("abc")
      .should("be.focused");
  });

  it("Should filter by amount min", () => {
    cy.get(':nth-child(3) > label > input')
      .type("100000000000")
      .should("be.focused");
  });

  it("Should filter by amount max", () => {
    cy.get(':nth-child(4) > label > input')
      .type("1")
      .should("be.focused");
  });
});