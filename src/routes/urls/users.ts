import { Router } from 'express'
import { getAllUsersController, insertUserController, updateUserController, deleteUserController } from '../../controllers/usersController/users';


module.exports = (routes: Router) => {
  routes.get('/users', getAllUsersController);
  routes.post('/user', insertUserController);
  routes.put('/user', updateUserController);
  routes.delete('/user/:id', deleteUserController);
}
