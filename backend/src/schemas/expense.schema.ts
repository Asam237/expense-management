import { integer, numeric, pgTable, text } from "drizzle-orm/pg-core";
import { users } from "./user.schema";
import { timestamps } from "./helper.schema";
import { categories } from "./category.schema";

export const expenses = pgTable("expenses", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  description: text("description").notNull(),
  amount: text("amount").notNull(),
  category: text("category").references(() => categories.id),
  userId: integer("userId").references(() => users.id),
  ...timestamps,
});
