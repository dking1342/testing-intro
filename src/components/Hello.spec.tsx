import { render, screen } from "@testing-library/react";
import React from "react";
import Hello from "./Hello";

const setup = () => render(<Hello />);

it("should render Hello", () => {
  setup();
  const myElement = screen.getByText("Hello");
  expect(myElement).toBeInTheDocument();
});
