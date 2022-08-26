import { Router } from 'express'
import { getAllCasesController, getAllCasesJoinController, getAllCasesIdJoinController, insertCaseController, updateCaseController, deleteCaseController } from '../../controllers/caseController/case';

module.exports = (routes: Router) => {
  routes.get('/cases', (req, res, next) => {
    /**  
    #swagger.tags = ['Cases']
    #swagger.description = 'Listagem de todos os casos'
    #swagger.responses[0] = {
      schema: { $ref: '#/definitions/cases' }
    }
  */
    next();
  }, getAllCasesController);

  routes.get('/cases/all/',
    (req, res, next) => {
      /**  
     #swagger.tags = ['Cases']
     #swagger.description = 'Listagem de todos os casos com seus devidos relacionamentos'
     #swagger.responses[0] = {
       schema: [{ $ref: '#/definitions/casesJoin' }]
       }
     */
      next();
    }
    , getAllCasesJoinController);

  routes.get('/cases/all/:id',
    (req, res, next) => {
      /**  
         #swagger.tags = ['Cases']
         #swagger.description = 'Caso completo com seus relacionamentos, filtrando pelo seu id'
          #swagger.responses[0] = {
          schema: { $ref: '#/definitions/casesJoin' }
          }
        */
      next();
    }
    , getAllCasesIdJoinController);

  routes.post('/case',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Cases']
        #swagger.parameters['case'] = { 
          in: 'body', schema: { $ref: '#/definitions/caseInsert' } }
      */
      next()
    },
    insertCaseController);

  routes.put('/case', (req, res, next) => {
    /**  
      #swagger.tags = ['Cases']
      #swagger.parameters['case'] = { 
        in: 'body', schema: { $ref: '#/definitions/caseUpdate' } }
    */
    next()
  }, updateCaseController);

  routes.delete('/case/:id', (req, res, next) => {
    /**  
      #swagger.tags = ['Cases']
    */
    next()
  }, deleteCaseController);
}