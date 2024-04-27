import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey(),
  title: text("name"),
  description: text("description"),
  order: integer("order"),
  priority: text("priority", { enum: ["High", "Medium", "Low"] }),
});
