/// <reference types="cypress" />

describe("Charts", () => {
  beforeEach(() => {
    cy.visit("/charts");
    cy.wait(2000);
    cy.get(".MuiSelect-root").click();
  });

  it("Show transactions per day", () => {
    cy.get("[data-value='transactions']").click();
    expect(cy.contains("Amount of transactions per day")).to.exist;
  });

  it("Show currency per day", () => {
    cy.get("[data-value='currency']").click();
    expect(cy.contains("Amount of currency sold per day")).to.exist;
  });

  it("Show buyers per day", () => {
    cy.get("[data-value='buyers']").click();
    expect(cy.contains("Amount of buyers per day")).to.exist;
  });

  it("Show sellers per day", () => {
    cy.get("[data-value='selers']").click();
    expect(cy.contains("Amount of sellers per day")).to.exist;
  });
});