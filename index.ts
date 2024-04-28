import * as schema from "./schema.js";
import { db } from "./db.js";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const server = Bun.serve({
  // GET all tasks
  async fetch(req) {
    const path = new URL(req.url).pathname;

    const optionsReq = (req: Request) => {
      if (req.method === "OPTIONS") {
        return new Response("Departed", { headers });
      }
    };

    if (path === "/tasks") {
      optionsReq(req);
      const result = await db.select().from(schema.tasks);
      return new Response(JSON.stringify(result), {
        headers,
        status: 200,
      });
    }

    // POST new task
    if (path === "/tasks/new" && req.method === "POST") {
      console.log("REQ:", req);
      optionsReq(req);
      // const result = await db.insert(schema.tasks).values({
      //   title: req.body?.title,
      //   description: req.body?.description,
      //   order: req.body?.order,
      //   priority: req.body?.priority,
      // });
      return new Response(JSON.stringify({}), { headers, status: 200 });
    }

    return new Response("Not found.", { status: 404 });
  },
  // PUT update task
  // DELETE remove task
});

console.log(`Listening on ${server.url}`);
