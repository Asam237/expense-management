import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../utils/db";

export const connectToDatabase = async () => {
  try {
    pool.on("connect", () => {
      console.log("[Postgres]: Connected to the database");
    });
    pool.on("error", (error) => {
      console.error("[Postgres]: Error connecting to the database", error);
    });
    const client = await pool.connect();
    client.release();
    return drizzle(pool);
  } catch (error) {
    throw new Error(error);
  }
};
