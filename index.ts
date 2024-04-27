import * as schema from "./schema.js";
import { db } from "./db.js";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    // GET all tasks
    if (path === "/tasks") {
      const result = await db.select().from(schema.tasks);

      if (req.method === "OPTIONS") {
        const res = new Response("Departed", { headers });
        return res;
      }

      return new Response(JSON.stringify({ result }), { headers });
    }

    return new Response("Not found.", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
