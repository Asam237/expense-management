import { Router } from "express";
import categoryController from "../controllers/category.controller";

export const CategoryRoute = () => {
  const router = Router();
  const prefix = "/categories";
  router.get(`${prefix}`, categoryController.findAll);
  router.post(`${prefix}`, categoryController.create);
  router.delete(`${prefix}/:id`, categoryController.deleteCategory);
  router.put(`${prefix}/:id`, categoryController.updateCategory);
  return router;
};
