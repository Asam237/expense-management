import { eq } from "drizzle-orm";
import { users } from "../schemas/user.schema";
import { User } from "../types/user.type";
import { db } from "../utils/db";
import { expenses } from "../schemas/expense.schema";

/**
 *
 * @param user - User
 * @returns Promise<User | null>
 */
const registerUser = async (user: User) => {
  const resp = await db.insert(users).values(user).returning();
  return resp.length > 0 ? resp[0] : null;
};

/**
 *
 * @param email - string
 * @returns Promise<User | null>
 */
const getUserByEmail = async (email: string) => {
  const resp = await db.select().from(users).where(eq(users.email, email));
  return resp.length > 0 ? resp[0] : null;
};

const getUserWithExpenses = async () => {
  const resp = await db
    .select({
      userId: users.id,
      email: users.email,
      fullName: users.fullName,
      expenseId: expenses.id,
      expenseAmount: expenses.amount,
      expenseDescription: expenses.description,
      expenseCategory: expenses.category,
    })
    .from(users)
    .leftJoin(expenses, eq(users.id, expenses.userId));
  const userMap = new Map<string, any>();
  resp.forEach((row) => {
    const userId = String(row.userId);
    const expenseId = String(row.expenseId);
    if (!userMap.has(userId)) {
      userMap.set(userId, {
        id: row.userId,
        email: row.email,
        fullName: row.fullName,
        expenses: [],
      });
    }
    if (expenseId) {
      userMap.get(userId).expenses.push({
        id: row.expenseId,
        amount: row.expenseAmount,
      });
    }
  });
  return Array.from(userMap.values());
};

const getOne = async (id: number) => {
  const resp = await db.select().from(users).where(eq(users.id, id));
  return resp.length > 0 ? resp[0] : null;
};

export default { getUserByEmail, getUserWithExpenses, registerUser, getOne };
