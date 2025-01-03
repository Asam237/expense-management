import { eq } from "drizzle-orm";
import { users } from "../schemas/user.schema";
import { User } from "../types/user.type";
import { db } from "../utils/db";

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

export default { registerUser, getUserByEmail };
