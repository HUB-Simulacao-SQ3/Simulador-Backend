"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../controllers/usersController/users");
module.exports = (routes) => {
    routes.get('/users', (req, res, next) => {
        /**
          #swagger.tags = ['Users']
          #swagger.responses[0] = {
            schema: { $ref: '#/definitions/user' }
          }
        */
        next();
    }, users_1.getAllUsersController);
    routes.post('/login', (req, res, next) => {
        /**
          #swagger.tags = ['Users']
          #swagger.responses[0] = {
            schema: { $ref: '#/definitions/user' }
          }
        */
        next();
    }, users_1.loginController);
    routes.post('/user', (req, res, next) => {
        /**
          #swagger.tags = ['Users']
          #swagger.parameters['user'] = {
            in: 'body', schema: { $ref: '#/definitions/user' } }
        */
        next();
    }, users_1.insertUserController);
    routes.put('/user', (req, res, next) => {
        /**
            #swagger.tags = ['Users']
            #swagger.parameters['user'] = {
              in: 'body', schema: { $ref: '#/definitions/userUpdate' } }
        */
        next();
    }, users_1.updateUserController);
    routes.delete('/user/:id', (req, res, next) => {
        /**  #swagger.tags = ['Users']*/
        next();
    }, users_1.deleteUserController);
};
