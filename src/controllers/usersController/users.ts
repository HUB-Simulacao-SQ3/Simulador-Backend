import { Request, Response } from "express";
import { EMessages } from "../../models/enums";
import { ResponseModel } from "../../models/response";
import { User, IUsersType } from "../../models/users";
import { UserService } from "../../services/usersService";
import { createToken, verifyToken } from "../../token";

const getAllUsersController = async (req: Request, res: Response) => {
  const users: User[] = await UserService.getAllUsersQuery();
  return res.status(200).json(new ResponseModel(users, true, []));
}

const insertUserController = async (req: Request, res: Response) => {
  const { email, type, name }: IUsersType = req.body;
  const users = User.create({ email, type, name });
  const response = await UserService.insertUserQuery(users);
  return res.status(200).json(new ResponseModel(response, true, []));
}

const updateUserController = async (req: Request, res: Response) => {
  const { id, email, type, name }: IUsersType = req.body;
  const users = User.create({ email, type, name }, id);
  const response = await UserService.updateUserQuery(users);
  return res.status(200).json(new ResponseModel(response, true, []));
}

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await UserService.deleteUserQuery(id);
  return res.status(200).json(new ResponseModel(response, true, []));
}

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await UserService.getUserLoginQuery({ email, password } as IUsersType);
  if (response?.length > 0) {
    delete response[0].password;
    const jwt = createToken(response[0]);
    return res.status(200).json(new ResponseModel({ jwt: jwt }, true, []));
  } else {
    return res.status(200).json(new ResponseModel({}, false, [EMessages.IncorrectLogin]));
  }
}

export {
  getAllUsersController,
  insertUserController,
  updateUserController,
  deleteUserController,
  loginController
};