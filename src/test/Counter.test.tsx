import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "../components/Counter"

describe("counter component tests", () => {
  const setup = () => render(<Counter />);

  it("should click on counter",() => {
    setup();
    const divElement = screen.getByRole("contentinfo");
    const buttonElement = screen.getByText(/add one/i);
    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent(/count is 1/i);
  })

})