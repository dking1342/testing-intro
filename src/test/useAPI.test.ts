import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { useAPI } from "../components/useAPI";
import { server } from "../mocks/server";


describe("testing useAPI custom hook", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  
  it("should make fetch request to api route", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAPI());
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

    await waitForNextUpdate();
    expect(result.current).toEqual({name:"joe"});
  })
})