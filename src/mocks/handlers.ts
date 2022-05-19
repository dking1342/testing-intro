import { DefaultBodyType, PathParams, rest } from "msw";
import { Photo } from "../types/fetches";

export const handlers = [
  rest.get<DefaultBodyType, PathParams<number>, Photo[]>(
    "https://jsonplaceholder.typicode.com/photos/",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
          },
        ])
      );
    }
  ),
];
