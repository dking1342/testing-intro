import React from 'react';
import Counter from '../Components/Counter';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const setup = () => render(<Counter />);
const customGetByTestId = (queryParameter) => screen.getByTestId(queryParameter).textContent;
const customGetByTestIdValue = (queryParameter) => screen.getByTestId(queryParameter).value;

// beforeEach(() => { 
//   ... some stuff
// });

// afterEach(() => {
//   ... some stuff
// });

test("header renders with correct text", () => {
  // render(<Counter />);
  // const headerElement = customGetByTestId("header");
  // expect(headerElement.textContent).toBe("My Counter");
  setup();
  expect(customGetByTestId("header")).toBe("My Counter");
});

test("counter initially starts with text of 0", () => {
  setup();
  expect(customGetByTestId("counter")).toBe("0");
});

test("input contains initial value of 1", () => {
  setup();
  expect(customGetByTestIdValue("input")).toBe("1");
});

test("add button renders with +", () => {
  setup();
  expect(customGetByTestId("add-btn")).toBe("+");
});

test("add button renders with -", () => {
  setup();
  expect(customGetByTestId("subtract-btn")).toBe("-")
  // render(<Counter />);
  // const subtractBtn = screen.getByTestId("subtract-btn");
  // expect(subtractBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  setup();
  expect(customGetByTestIdValue("input")).toBe("1");
  fireEvent.change(screen.getByTestId("input"), { target: { value: "5" }});
  expect(customGetByTestIdValue("input")).toBe("5");
  // render(<Counter />);
  // const inputElement = screen.getByTestId("input");
  // expect(inputElement.value).toBe("1");
  // fireEvent.change(inputElement, { target: { value: "5" }});
  // expect(inputElement.value).toBe("5");
});

test("click on + btn adds 1 to counter", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("add-btn");
  const counterElement = screen.getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(addBtn);
  expect(counterElement.textContent).toBe("1");
});

test("click on - btn subtracts 1 to counter", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtract-btn");
  const counterElement = screen.getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(subtractBtn);
  expect(counterElement.textContent).toBe("-1");
});

test("changing input value then clicking on + btn works correctly", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("add-btn");
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");

  expect(counterElement.textContent).toBe("0");
  expect(inputElement.value).toBe("1");
  fireEvent.change(inputElement, { target: { value: "5" }});
  expect(inputElement.value).toBe("5");
  fireEvent.click(addBtn);
  expect(counterElement.textContent).toBe("5");
});

test("changing input value then clicking on - btn works correctly", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtract-btn");
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");

  expect(counterElement.textContent).toBe("0");
  expect(inputElement.value).toBe("1");
  fireEvent.change(inputElement, { target: { value: "5" }});
  expect(inputElement.value).toBe("5");
  fireEvent.click(subtractBtn);
  expect(counterElement.textContent).toBe("-5");
});

test("adding then subtracting leads to the correct counter value", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("add-btn");
  const subtractBtn = screen.getByTestId("subtract-btn");
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");

  expect(counterElement.textContent).toBe("0");
  
  expect(inputElement.value).toBe("1");
  fireEvent.change(inputElement, { target: { value: "10" }});
  expect(inputElement.value).toBe("10");

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  expect(counterElement.textContent).toBe("20");

  expect(inputElement.value).toBe("10");
  fireEvent.change(inputElement, { target: { value: "5" }});
  expect(inputElement.value).toBe("5");

  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  expect(counterElement.textContent).toBe("30");
});

test("counter contains correct className", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("add-btn");
  const subtractBtn = screen.getByTestId("subtract-btn");
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");

  expect(counterElement.textContent).toBe("0");
  expect(counterElement.className).toBe("");
  
  expect(inputElement.value).toBe("1");
  fireEvent.change(inputElement, { target: { value: "50" }});
  expect(inputElement.value).toBe("50");
  
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  expect(counterElement.textContent).toBe("100");
  expect(counterElement.className).toBe("green");
  
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  fireEvent.click(subtractBtn);
  expect(counterElement.textContent).toBe("-100");
  expect(counterElement.className).toBe("red");
  
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  expect(counterElement.textContent).toBe("0");
  expect(counterElement.className).toBe("");
})
