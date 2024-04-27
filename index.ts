import * as schema from "./schema.js";
import { db } from "./db.js";

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    // GET all tasks
    if (path === "/tasks") {
      const result = await db.select().from(schema.tasks);
      return Response.json({ success: true, data: result });
    }

    return new Response("Not found.", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
