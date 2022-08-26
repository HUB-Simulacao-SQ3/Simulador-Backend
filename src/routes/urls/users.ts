import { Router } from 'express'
import { getAllUsersController, insertUserController, updateUserController, deleteUserController } from '../../controllers/usersController/users';


module.exports = (routes: Router) => {
  routes.get('/users', () => {
    /**  
      #swagger.tags = ['Users']
      #swagger.responses[0] = {
        schema: { $ref: '#/definitions/user' }
      }
    */
  }, getAllUsersController);

  routes.post('/user', () => {
    /**  
      #swagger.tags = ['Users']
      #swagger.parameters['user'] = { 
        in: 'body', schema: { $ref: '#/definitions/user' } }
    */ }, insertUserController);

  routes.put('/user', () => {
    /**  
        #swagger.tags = ['Users'] 
        #swagger.parameters['user'] = { 
          in: 'body', schema: { $ref: '#/definitions/userUpdate' } }
    */ }, updateUserController);

  routes.delete('/user/:id', () => {
    /**  #swagger.tags = ['Users']*/
  }, deleteUserController);
}
