import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

export const pool = new pg.Pool({
  connectionString: `postgres://asam:asam@localhost:5432/asam`,
});

export const db = drizzle(pool);
