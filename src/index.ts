import express from "express";
import { connectToDatabase } from "./startup/database";
import { PORT } from "./startup/config";
import { setupRestEndPoint } from "./setupRestEndPoint";

const app = express();
setupRestEndPoint(app);
connectToDatabase();

export const server = app.listen(PORT, () => {
  console.log(`[Server]: running on port ${PORT}`);
});
