import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";
import Photos from "./Photos";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("initial fetch request", () => {
  let setup = () => render(<Photos />);

  test("render page with loading", () => {
    setup();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("render page and payload gets loaded", async () => {
    setup();
    const headerElement = screen.findByRole(
      "heading",
      { name: /photos/i },
      { timeout: 10000 }
    );
    const titleElement = screen.findByText(
      /title: accusamus beatae ad facilis cum similique qui sunt/i,
      {},
      { timeout: 10000 }
    );
    await waitFor(() => headerElement);
    await waitFor(() => titleElement);
  });
});
