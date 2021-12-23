import type { IncomingMessage, ServerResponse } from "http";
import url from "url";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const id = url.parse(req.url as string, true).path.split("/")[1];

  let data = await $fetch(`/events/${id}`, {
    baseURL: "https://my-json-server.typicode.com/Code-Pop/real-world-nuxt",
  });

  res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
  res.write(JSON.stringify(data));
  res.end();
};
