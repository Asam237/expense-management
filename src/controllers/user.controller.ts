import { Request, Response } from "express";
import { User } from "../types/user.type";
import * as bcrypt from "bcryptjs";
import userService from "../services/user.service";

const registerUser = async (req: Request, res: Response): Promise<Response> => {
  const { email, fullName }: User = req.body;
  try {
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = await userService.registerUser({ email, fullName, password });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const { email }: User = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getUserWithExpenses = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await userService.getUserWithExpenses();
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default { registerUser, loginUser, getUserWithExpenses };
