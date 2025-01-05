import { eq } from "drizzle-orm";
import { expenses } from "../schemas/expense.schema";
import { Expense } from "../types/expense.type";
import { db } from "../utils/db";

const create = async (expense: Expense) => {
  const resp = await db.insert(expenses).values(expense).returning();
  return resp.length > 0 ? resp[0] : null;
};

const getAll = async () => {
  return await db.select().from(expenses);
};

const getOne = async (id: number) => {
  const resp = await db.select().from(expenses).where(eq(expenses.id, id));
  return resp.length > 0 ? resp[0] : null;
};

const updateOne = async (id: number, expense: Expense) => {
  const resp = await db
    .update(expenses)
    .set(expense)
    .where(eq(expenses.id, id))
    .returning();
};

const deleteOne = async (id: number) => {
  return await db.delete(expenses).where(eq(expenses.id, id)).returning();
};

export default { create, updateOne, deleteOne, getAll, getOne };
