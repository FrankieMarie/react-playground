import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey(),
  title: text("name"),
  description: text("description"),
  priority: text("priority", { enum: ["High", "Medium", "Low"] }),
  status: text("status", { enum: ["todo", "inProgress", "done"] }),
  createdAt: integer("created_at", { mode: "timestamp" }),
  userId: text("user_id"),
});
