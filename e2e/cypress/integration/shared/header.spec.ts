/// <reference types="cypress" />

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button").first().click({ force: true });
  })

  it("Should open menu and go to home", () => {
    cy.contains('Home').click();
  });

  it("Should open menu and go to transactions", () => {
    cy.contains('Transactions').click();
  });

  it("Should open menu and go to charts", () => {
    cy.contains('Charts').click();
  });

  it("Should open menu and go to top seller", () => {
    cy.contains('Top seller').click();
  });

  it("Should open menu and go to top buyer", () => {
    cy.contains('Top buyer').click();
  });

  it("Should open menu and go to treemap", () => {
    cy.contains('Treemap').click();
  });

  it("Should open menu and go to custom chart", () => {
    cy.contains('Custom chart').click();
  });
});