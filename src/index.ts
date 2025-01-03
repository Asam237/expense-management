import express from "express";
import { connectToDatabase } from "./startup/database";
import { PORT } from "./startup/config";

const app = express();
connectToDatabase();

export const server = app.listen(PORT, () => {
  console.log(`[Server]: running on port ${PORT}`);
});
