import { Router } from "express";
import userController from "../controllers/user.controller";

export const UserRoute = () => {
  const router = Router();
  const prefix: string = "/users";
  router.post(`${prefix}/register`, userController.registerUser);
  router.post(`${prefix}/login`, userController.loginUser);
  router.get(
    `${prefix}/users-with-expenses`,
    userController.getUserWithExpenses
  );
  return router;
};
