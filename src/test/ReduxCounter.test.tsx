import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import ReduxCounter from "../components/ReduxCounter"
import { store } from "../context/store";

describe("testing the redux counter component", () => {
  

  it("count should be 1 increment button click", () => {
    render(<Provider store={ store }><ReduxCounter /></Provider>);
    const counter = screen.getByRole("contentinfo");
    const addBtn = screen.getByText(/increment/i);
    const resetBtn = screen.getByText(/reset/i);
    expect(counter).toHaveTextContent("0");
    fireEvent.click(addBtn);
    expect(counter).toHaveTextContent("1");
    fireEvent.click(resetBtn);
  })

  it("count should be 1 increment button clicked again for second consecutive test", () => {
    render(<Provider store={ store }><ReduxCounter /></Provider>);
    const counter = screen.getByRole("contentinfo");
    const addBtn = screen.getByText(/increment/i);
    const resetBtn = screen.getByText(/reset/i);
    expect(counter).toHaveTextContent("0");
    fireEvent.click(addBtn);
    expect(counter).toHaveTextContent("1");
    fireEvent.click(resetBtn);
  })
})