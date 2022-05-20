import { render, screen, fireEvent } from "@testing-library/react"
import ButtonWrapper from "../components/ButtonWrapper"

describe("testing buttonwrapper component", () => {
  const onClick = jest.fn();
  const setup = (title:string) => render(<ButtonWrapper onClick={onClick} title={ title } />);

  it("handles on click", () => {
    setup("Add Item");
    const buttonElement = screen.getByText(/add item/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})

