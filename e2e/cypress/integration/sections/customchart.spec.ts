/// <reference types="cypress" />

describe("Custom chart", () => {
  it("Show page text", () => {
    cy.visit("/top-buyer-with-custom");
    cy.wait(2000);
    expect(cy.contains("Top buyer (amount of transactions)")).to.exist;
  });

  it("Zoom in", () => {
    cy.get('[aria-label="plus"] > .MuiIconButton-label > .MuiSvgIcon-root').click();
    expect(cy.contains("Zoom 2")).to.exist;
  });

  it("Zoom out", () => {
    cy.get('[aria-label="minus"] > .MuiIconButton-label > .MuiSvgIcon-root').click();
    expect(cy.contains("Zoom 1")).to.exist;
  });
});