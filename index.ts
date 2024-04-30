import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { db } from "./db.js";
import * as schema from "./schema.js";
import type { Task } from "./schema.js";
import { eq } from "drizzle-orm/sqlite-core/expressions";

type RequestBody = { body: Task };

const app = new Elysia()
  .use(cors())
  .get("/tasks", async () => {
    const result = await db.select().from(schema.tasks);
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  })
  .post("/task/new", async ({ body }: RequestBody) => {
    await db.insert(schema.tasks).values(body);
    return new Response("Added new task", {
      status: 200,
    });
  })
  .put("/task/update", async ({ body }: RequestBody) => {
    await db
      .update(schema.tasks)
      .set(body)
      .where(eq(schema.tasks.id, body.id!));
    return new Response(
      JSON.stringify({ id: body.id, message: "Updated task" }),
      {
        status: 200,
      }
    );
  })
  .listen(3000);

export type App = typeof app;

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
