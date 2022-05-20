import { render, screen } from "@testing-library/react"
import { rest } from "msw";
import APIComponent from "../components/APIComponent"
import { server } from "../mocks/server";

describe("apicomponent tests", () => {
  const setup = () => render(<APIComponent />);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("handles fetch get request", async () => {
    setup();
    server.use(
      rest.get("/api", (req,res,ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            name:"joe"
          })
        )
      })    
    );
    // const output = await waitFor(()=> screen.findByRole("contentinfo"))
    const output = await screen.findByRole("contentinfo", {}, { timeout: 5000 });
    expect(output).toHaveTextContent(/name is joe/i);
    
  })
})