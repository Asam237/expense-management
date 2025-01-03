import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "./helper.schema";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  fullName: text("fullName"),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  ...timestamps,
});
