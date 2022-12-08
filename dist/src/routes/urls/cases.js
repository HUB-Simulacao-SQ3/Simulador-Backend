"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const case_1 = require("../../controllers/caseController/case");
module.exports = (routes) => {
    routes.get('/cases', (req, res, next) => {
        /**
        #swagger.tags = ['Cases']
        #swagger.description = 'Listagem de todos os casos'
        #swagger.responses[0] = {
          schema: { $ref: '#/definitions/cases' }
        }
      */
        next();
    }, case_1.getAllCasesController);
    routes.get('/cases/all/', (req, res, next) => {
        /**
       #swagger.tags = ['Cases']
       #swagger.description = 'Listagem de todos os casos com seus devidos relacionamentos'
       #swagger.responses[0] = {
         schema: [{ $ref: '#/definitions/casesJoin' }]
         }
       */
        next();
    }, case_1.getAllCasesJoinController);
    routes.get('/cases/all/:id', (req, res, next) => {
        /**
           #swagger.tags = ['Cases']
           #swagger.description = 'Caso completo com seus relacionamentos, filtrando pelo seu id'
            #swagger.responses[0] = {
            schema: { $ref: '#/definitions/casesJoin' }
            }
          */
        next();
    }, case_1.getAllCasesIdJoinController);
    routes.post('/case', (req, res, next) => {
        /**
          #swagger.tags = ['Cases']
          #swagger.parameters['case'] = {
            in: 'body', schema: { $ref: '#/definitions/caseInsert' } }
        */
        next();
    }, case_1.insertCaseController);
    routes.put('/case', (req, res, next) => {
        /**
          #swagger.tags = ['Cases']
          #swagger.parameters['case'] = {
            in: 'body', schema: { $ref: '#/definitions/caseUpdate' } }
        */
        next();
    }, case_1.updateCaseController);
    routes.delete('/case/:id', (req, res, next) => {
        /**
          #swagger.tags = ['Cases']
        */
        next();
    }, case_1.deleteCaseController);
};
