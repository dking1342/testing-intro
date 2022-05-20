import { render, screen } from "@testing-library/react";
import Person from "../components/Person";

describe("tests for person components", () => {

  describe("testing the name", () => {

    it("renders the name joe", () => {
      render(<Person name="joe" />);
      const nameRole = screen.getByRole("joe");
      const nameElement = screen.getByText(/name: joe/i);
      expect(nameElement).toBeInTheDocument();
      expect(nameRole).toHaveTextContent(/joe/i);
      expect(nameElement).toHaveAttribute("role", "joe");
    });
  });

});

