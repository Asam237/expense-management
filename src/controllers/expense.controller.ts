import { Request, Response } from "express";
import { Expense } from "../types/expense.type";
import userService from "../services/user.service";
import expenseService from "../services/expense.service";

const create = async (req: Request, res: Response) => {
  const { amount, category, description, userId }: Expense = req.body;
  try {
    const user = await userService.getOne(Number(userId));
    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }
    const expense = await expenseService.create({
      amount,
      category,
      description,
      userId,
    });
    return res.status(201).json({ expense });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findAll = async (req: Request, res: Response) => {
  try {
    const expenses = await expenseService.getAll();
    return res.status(201).json({ expenses });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findOne = async (req: Request, res: Response) => {
  try {
    const expense = await expenseService.getOne(Number(req.params.id));
    if (!expense) {
      return res.json({ message: "Not expenses found!" });
    }
    return res.status(201).json({ expense });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateOne = async (req: Request, res: Response) => {
  const { amount, category, description, userId }: Expense = req.body;
  try {
    const expense = await expenseService.updateOne(Number(req.params.id), {
      amount,
      category,
      description,
      userId,
    });
    return res.status(201).json({ expense });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    const expense = await expenseService.deleteOne(Number(req.params.id));
    return res.status(201).json({ message: "Expense has been deleted!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default { create, updateOne, deleteOne, findOne, findAll };
