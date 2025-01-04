import { Router } from "express";
import expenseController from "../controllers/expense.controller";

export const ExpenseRoute = () => {
  const router = Router();
  const prefix: string = "/expenses";
  router.get(`${prefix}`, expenseController.findAll);
  router.get(`${prefix}/:id`, expenseController.findOne);
  router.delete(`${prefix}/:id`, expenseController.deleteOne);
  router.put(`${prefix}/:id`, expenseController.updateOne);
  router.post(`${prefix}`, expenseController.create);
  return router;
};
