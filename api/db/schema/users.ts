import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey().notNull(),
  avatar: text("avatar"),
  userName: text("user_name"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").notNull(),
  password: text("password"),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
