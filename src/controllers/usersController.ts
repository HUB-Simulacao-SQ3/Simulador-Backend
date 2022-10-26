import { Request, Response } from "express";
import { User, IUsersType } from "../models/Users";
import { UserService } from "../services/usersService";

const getAllUsersController = async (req: Request, res: Response) => {
  const users: User[] = await UserService.getAllUsersQuery();
  return res.status(200).json(users);
}

const insertUserController = async (req: Request, res: Response) => {
  const { email, type, name, password }: IUsersType = req.body;
  const users = User.create({password, email, type, name });
  const response = await UserService.insertUserQuery(users);
  return res.status(200).json(response);
}

const updateUserController = async (req: Request, res: Response) => {
  const { id, email, type, name, password }: IUsersType = req.body;
  const users = User.create({ email, type, name, password }, id);
  const response = await UserService.updateUserQuery(users);
  return res.status(200).json(response);
}

const getUserController = async (req: Request, res: Response) => {
  const response = await UserService.getUserQuery(req.params.id);
  return res.status(200).json(response);
}

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await UserService.deleteUserQuery(id);
  return res.status(200).json(response);
}

export {
  getAllUsersController,
  insertUserController,
  updateUserController,
  getUserController,
  deleteUserController
};