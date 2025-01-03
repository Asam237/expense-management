import express, { Application } from "express";
import { UserRoute } from "./routes/user.route";
import { CategoryRoute } from "./routes/category.route";

export const setupRestEndPoint = (app: Application) => {
  app.use(express.json());
  app.use("/", UserRoute());
  app.use("/", CategoryRoute());
};
