import { http, HttpResponse } from "msw";

export const handlers = [
    http.get("https://jsonplaceholder.typicode.com/posts", () => {
      return new Response(
        JSON.stringify({
          msg: "Intercepted request !",
        }),
      );
    }),
]  
  