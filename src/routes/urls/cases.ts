import { Router } from 'express'
import { getAllCasesController, getAllCasesJoinController, getAllCasesIdJoinController, insertCaseController, updateCaseController, deleteCaseController } from '../../controllers/caseController/case';

module.exports = (routes: Router) => {
  routes.get('/cases', getAllCasesController);
  routes.get('/cases/all/', getAllCasesJoinController);
  routes.get('/cases/all/:id', getAllCasesIdJoinController);
  routes.post('/case', insertCaseController);
  routes.put('/case', updateCaseController);
  routes.delete('/case/:id', deleteCaseController);
}