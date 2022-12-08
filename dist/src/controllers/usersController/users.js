"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.deleteUserController = exports.updateUserController = exports.insertUserController = exports.getAllUsersController = void 0;
const response_1 = require("../../models/response");
const users_1 = require("../../models/users");
const usersService_1 = require("../../services/usersService");
const token_1 = require("../../token");
const getAllUsersController = async (req, res) => {
    const users = await usersService_1.UserService.getAllUsersQuery();
    return res.status(200).json(users);
};
exports.getAllUsersController = getAllUsersController;
const insertUserController = async (req, res) => {
    const { email, type, name } = req.body;
    const users = users_1.User.create({ email, type, name });
    const response = await usersService_1.UserService.insertUserQuery(users);
    return res.status(200).json(response);
};
exports.insertUserController = insertUserController;
const updateUserController = async (req, res) => {
    const { id, email, type, name } = req.body;
    const users = users_1.User.create({ email, type, name }, id);
    const response = await usersService_1.UserService.updateUserQuery(users);
    return res.status(200).json(response);
};
exports.updateUserController = updateUserController;
const deleteUserController = async (req, res) => {
    const { id } = req.params;
    const response = await usersService_1.UserService.deleteUserQuery(id);
    return res.status(200).json(response);
};
exports.deleteUserController = deleteUserController;
const loginController = async (req, res) => {
    const { email, password } = req.body;
    const response = await usersService_1.UserService.getUserLoginQuery({ email, password });
    if ((response === null || response === void 0 ? void 0 : response.length) > 0) {
        delete response[0].password;
        const jwt = (0, token_1.createToken)(response[0]);
        return res.status(200).json(new response_1.ResponseModel(jwt, true, ['']));
    }
    else {
        return res.status(200).json(new response_1.ResponseModel({}, true, ['Email ou senha incorreto']));
    }
};
exports.loginController = loginController;
