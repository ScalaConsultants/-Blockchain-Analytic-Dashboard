/// <reference types="cypress" />

describe("Top seller", () => {
  it("Open calendar", () => {
    cy.visit("top-seller");
    cy.wait(2000);
    cy.get(".MuiInputAdornment-root > .MuiButtonBase-root").click();
    cy.get(".MuiPickersBasePicker-container > .MuiToolbar-root").should("be.visible");
  });

  it("Should set a date", () => {
    cy.get(".MuiPickersCalendar-transitionContainer > :nth-child(1) > :nth-child(1) > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label").click();
    cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label").click();
  });
});