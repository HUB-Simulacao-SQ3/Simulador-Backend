import { Router } from 'express'
import { getAllUsersController, insertUserController, updateUserController, deleteUserController, loginController } from '../../controllers/usersController/users';


module.exports = (routes: Router) => {
  routes.get('/users', (req, res, next) => {
    /**  
      #swagger.tags = ['Users']
      #swagger.responses[0] = {
        schema: { $ref: '#/definitions/user' }
      }
    */
    next();
  }, getAllUsersController);

  routes.post('/login', (req, res, next) => {
    /**  
      #swagger.tags = ['Users']
      #swagger.responses[0] = {
        schema: { $ref: '#/definitions/user' }
      }
    */
    next();
  }, loginController);

  routes.post('/user', (req, res, next) => {
    /**  
      #swagger.tags = ['Users']
      #swagger.parameters['user'] = { 
        in: 'body', schema: { $ref: '#/definitions/user' } }
    */
    next();
  }, insertUserController);

  routes.put('/user', (req, res, next) => {
    /**  
        #swagger.tags = ['Users'] 
        #swagger.parameters['user'] = { 
          in: 'body', schema: { $ref: '#/definitions/userUpdate' } }
    */
    next();
  }, updateUserController);

  routes.delete('/user/:id', (req, res, next) => {
    /**  #swagger.tags = ['Users']*/
    next();
  }, deleteUserController);
}
