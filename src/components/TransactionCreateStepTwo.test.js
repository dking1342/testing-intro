import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// process for testing
// arrange
// act
// assert
// repeat if integration or multiple tests

// unit test
test("on initial render the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver="abc" />);

  // screen method
  // screen.debug(); // acts as a debugger to stop the code
  // screen.getByRole(""); // selector for an item in the DOM and will act as a debugger for the JSX
  // screen.findByRole(""); // alternative selector for the DOM. Must use async await for it to work properly

  // Assertion testing: first test the opposite case then the base case.
  // check opposite case: enabled button
  // expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();

  // check base case: disabled button
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

// unit test
test("if an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver="abc" />);
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
  // use getByRole to peak DOM and values
  // screen.getByRole("");
  // check for opposite case
  // expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
  // check for base case
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// integration test
test("test user flow for being on this page and getting the pay button to be enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver="abc" />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
