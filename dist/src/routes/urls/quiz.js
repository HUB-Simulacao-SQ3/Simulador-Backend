"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_1 = require("../../controllers/quizController/quiz");
module.exports = (routes) => {
    routes.get('/quizs', (req, res, next) => {
        /**
          #swagger.tags = ['Quizs']
          #swagger.responses[0] = {
            schema: [ { $ref: '#/definitions/quizs' } ]
          }
        */
        next();
    }, quiz_1.getAllQuizsController);
    routes.get('/quiz/case/:id', (req, res, next) => {
        /**
          #swagger.tags = ['Quizs']
          #swagger.description = 'Buscar quiz pelo id do caso'
          #swagger.responses[0] = {
            schema: [ { $ref: '#/definitions/quizs' } ]
          }
        */
        next();
    }, quiz_1.getQuizCaseController);
    routes.post('/quiz', (req, res, next) => {
        /**
          #swagger.tags = ['Quizs']
          #swagger.parameters['quiz'] = {
            in: 'body', schema: { $ref: '#/definitions/quizInsert' }
          }
        */
        next();
    }, quiz_1.insertQuizController);
    routes.put('/quiz', (req, res, next) => {
        /**
            #swagger.tags = ['Quizs']
            #swagger.parameters['quiz'] = {
              in: 'body', schema: { $ref: '#/definitions/quizUpdate' }
            }
          */
        next();
    }, quiz_1.getAllQuizsController);
    routes.delete('/quiz/:id', (req, res, next) => {
        /**
          #swagger.tags = ['Quizs']
        */
        next();
    }, quiz_1.deleteQuizController);
};
