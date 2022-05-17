import { fireEvent, waitFor } from "@testing-library/dom";
import { render, RenderResult, screen } from "@testing-library/react";
import Counter, { CounterProps } from "./Counter";
import userEvent from "@testing-library/user-event";

type setupFn = (props: CounterProps) => RenderResult;
const setup: setupFn = ({ description, defaultCount }) =>
  render(<Counter description={description} defaultCount={defaultCount} />);

describe("Counter", () => {
  let description: string, defaultCount: number;
  beforeEach(() => {
    description = "My Counter";
    defaultCount = 0;
  });

  describe("initialized with default count is 0 and description is my counter", () => {
    beforeEach(() => {
      setup({ description, defaultCount });
    });

    it("renders title as my counter", () => {
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });

    it("renders current count as 0", () => {
      expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    });
  });

  describe("when + button is clicked", () => {
    it("current counter should be 1", () => {
      setup({ description, defaultCount });
      fireEvent.click(screen.getByRole("button", { name: "increment" }));
      expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
    });
  });

  describe("when - button is clicked", () => {
    it("current counter should be -1", () => {
      setup({ description, defaultCount });
      fireEvent.click(screen.getByRole("button", { name: "decrement" }));
      expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
    });
  });

  describe("when incrementor changes and + button clicked", () => {
    let inputElement: HTMLInputElement, addBtn: HTMLButtonElement;
    beforeEach(() => {
      setup({ description, defaultCount });
      inputElement = screen.getByRole("spinbutton", { name: /changer/i });
      addBtn = screen.getByRole("button", { name: /increment/i });
    });

    it("renders current count is 15", () => {
      fireEvent.change(inputElement, { target: { value: 5 } });
      fireEvent.click(addBtn);
      fireEvent.click(addBtn);
      fireEvent.click(addBtn);
      expect(screen.getByText("Current Count: 15")).toBeInTheDocument();
    });

    it("renders current count is 40", () => {
      fireEvent.change(inputElement, { target: { value: 10 } });
      fireEvent.click(addBtn);
      fireEvent.click(addBtn);
      fireEvent.click(addBtn);
      fireEvent.click(addBtn);
      expect(screen.getByText("Current Count: 40")).toBeInTheDocument();
    });
  });

  describe("async incrementor changes and ++ button is pressed", () => {
    let inputElement: HTMLInputElement, addBtn: HTMLButtonElement;
    beforeEach(async () => {
      setup({ description, defaultCount });
      inputElement = screen.getByRole("spinbutton", { name: /changer/i });
      addBtn = screen.getByRole("button", { name: /async/i });
      // await waitFor(() => screen.findByText(/current count: 10/i));
    });

    fit("incrementor value is 10 and current count is 10", async () => {
      fireEvent.change(inputElement, { target: { value: 10 } });
      fireEvent.click(addBtn);

      // async can use async/await or waitFor
      // await waitFor(() => screen.findByText(/current count: 10/i));
      await screen.findByText(/current count: 10/i);

      fireEvent.click(addBtn);
      // await waitFor(() => screen.findByText(/current count: 20/i));
      await screen.findByText(/current count: 20/i);
    });
  });
});
