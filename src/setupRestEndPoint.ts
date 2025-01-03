import express, { Application } from "express";
import { UserRoute } from "./routes/user.route";

export const setupRestEndPoint = (app: Application) => {
  app.use(express.json());
  app.use("/", UserRoute());
};
