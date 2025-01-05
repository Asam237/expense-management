import { Request, Response } from "express";
import { Category } from "../types/category.type";
import categoryService from "../services/category.service";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { description, name }: Category = req.body;
  try {
    const category = await categoryService.create({ description, name });
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const categories = await categoryService.getAllCategories();
    return res.json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    await categoryService.deleteCategory(Number(req.params.id));
    return res.json({ message: "Category deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { description, name }: Category = req.body;
  try {
    const category = await categoryService.updateCategory(
      Number(req.params.id),
      { description, name }
    );
    return res.json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default { create, deleteCategory, updateCategory, findAll };
