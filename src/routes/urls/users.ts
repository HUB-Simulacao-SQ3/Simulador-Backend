import { Router } from 'express'
import { getAllUsersController, insertUserController, updateUserController, getUserController, deleteUserController } from '../../controllers/usersController';


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

  routes.get('/user/:id', (req, res, next) => {
    /**  
      #swagger.tags = ['User']
      #swagger.description = 'Buscar user pelo id'
      #swagger.responses[0] = {
        schema: { $ref: '#/definitions/user' }
      }
    */
    next();
  }, getUserController);
  

  routes.delete('/user/:id', (req, res, next) => {
    /**  #swagger.tags = ['Users']*/
    next();
  }, deleteUserController);
}
