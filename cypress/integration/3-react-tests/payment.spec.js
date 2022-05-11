/// <reference types="cypress" />
import { v4 as uuidv4 } from "uuid";

beforeEach("create note id", () => {
  cy.wrap(`${uuidv4()}`).as("note");
  cy.wrap("5").as("amount");
});

describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // check account balance
    cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
      const oldBalance = parseFloat($balance.text().replace(/\$|,/g, ""));
      cy.log(`Old balance is: ${oldBalance}`);

      // click on pay button
      cy.findByRole("button", { name: /new/i }).click();

      // search for user
      cy.findByRole("textbox").type("devon becker");
      cy.findByText(/devon becker/i).click();

      // add amount, note then click pay
      cy.get("@amount").then((amount) => {
        cy.findByPlaceholderText(/amount/i).type(amount);
      });
      cy.get("@note").then((note) => {
        cy.findByPlaceholderText(/add a note/i).type(note);
      });
      cy.findByRole("button", { name: /pay/i }).click();

      // return to transactions
      cy.findByRole("button", { name: /return to transactions/i }).click();

      // go to personal payments
      cy.findByRole("tab", { name: /mine/i }).click();

      // click on payment
      cy.get("@note").then((note) => {
        cy.findByText(`${note}`).click({ force: true });
      });

      // verify correct payment made
      cy.get("@amount").then((amount) => {
        cy.findByText(`-$${amount}.00`).should("be.visible");
      });
      cy.get("@note").then((note) => {
        cy.findByText(note).should("be.visible");
      });

      // verify payment amount was deducted
      cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
        const newBalance = parseFloat($balance.text().replace(/\$|,/g, ""));
        cy.log(`New balance is: ${oldBalance}`);
        let transactionAmount = oldBalance - newBalance;
        cy.log(`Transaction amount is ${transactionAmount}`);
        cy.get("@amount").then((amount) => {
          expect(Number(amount)).to.be.equal(transactionAmount);
        });
      });
    });
  });
});
