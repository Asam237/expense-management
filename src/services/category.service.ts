import { eq } from "drizzle-orm";
import { categories } from "../schemas/category.schema";
import { Category } from "../types/category.type";
import { db } from "../utils/db";

const create = async (category: Category) => {
  const resp = await db.insert(categories).values(category).returning();
  return resp.length > 0 ? resp[0] : null;
};

const getAllCategories = async () => {
  return await db.select().from(categories);
};

const updateCategory = async (id: number, category: Category) => {
  const resp = await db
    .update(categories)
    .set(category)
    .where(eq(categories.id, id))
    .returning();
  return resp.length > 0 ? resp[0] : null;
};

const deleteCategory = async (id: number) => {
  return await db.delete(categories).where(eq(categories.id, id));
};

export default { create, getAllCategories, updateCategory, deleteCategory };
