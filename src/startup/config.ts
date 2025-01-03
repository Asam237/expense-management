import { config } from "dotenv";

config();

export const POSTGRES_USER = process.env.POSTGRES_USER || "postgres";
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "postgres";
export const PORT = process.env.PORT || 3010;
