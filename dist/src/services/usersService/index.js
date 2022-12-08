"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const users_service_1 = require("./users.service");
const UserService = {
    getAllUsersQuery: users_service_1.getAllUsersQuery,
    insertUserQuery: users_service_1.insertUserQuery,
    updateUserQuery: users_service_1.updateUserQuery,
    deleteUserQuery: users_service_1.deleteUserQuery,
    getUserLoginQuery: users_service_1.getUserLoginQuery
};
exports.UserService = UserService;
