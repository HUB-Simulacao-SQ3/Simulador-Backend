import { Router } from "express";
import { getAllQuizsController, getQuizCaseController, insertQuizController, updateQuizController, deleteQuizController } from "../../controllers/quizController";


module.exports = (routes: Router) => {
  routes.get('/quizs',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Quizs']
        #swagger.responses[0] = {
          schema: [ { $ref: '#/definitions/quizs' } ]
        }
      */
      next();
    }, getAllQuizsController);

  routes.get('/quiz/case/:id',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Quizs']
        #swagger.description = 'Buscar quiz pelo id do caso'
        #swagger.responses[0] = {
          schema: [ { $ref: '#/definitions/quizs' } ]
        }
      */
      next();
    }, getQuizCaseController);

  routes.post('/quiz',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Quizs']
        #swagger.parameters['quiz'] = { 
          in: 'body', schema: { $ref: '#/definitions/quizInsert' } 
        }
      */
      next();
    },
    insertQuizController);

  routes.put('/quiz', (req, res, next) => {
    /**  
        #swagger.tags = ['Quizs']
        #swagger.parameters['quiz'] = { 
          in: 'body', schema: { $ref: '#/definitions/quizUpdate' } 
        }
      */
    next();
  }, updateQuizController);

  routes.delete('/quiz/:id', (req, res, next) => {
    /**  
      #swagger.tags = ['Quizs']
    */
    next();
  }, deleteQuizController);
}