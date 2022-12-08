"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monitoring_1 = require("../../controllers/monitoringController/monitoring");
module.exports = (routes) => {
    routes.get('/monitorings', (req, res, next) => {
        /**
        #swagger.tags = ['Monitoring']
        #swagger.description = 'Listagem de todas as monitorizações'
        #swagger.responses[0] = {
          schema: { $ref: '#/definitions/monitoring' }
        }
      */
        next();
    }, monitoring_1.getAllMonitoringsController);
    routes.post('/monitoring', (req, res, next) => {
        /**
          #swagger.tags = ['Monitoring']
          #swagger.parameters['monitoring'] = {
            in: 'body', schema: { $ref: '#/definitions/monitoringInsert' } }
        */
        next();
    }, monitoring_1.insertMonitoringController);
    routes.put('/monitoring', (req, res, next) => {
        /**
          #swagger.tags = ['Monitoring']
          #swagger.parameters['monitoring'] = {
            in: 'body', schema: { $ref: '#/definitions/monitoringUpdate' } }
        */
        next();
    }, monitoring_1.updateMonitoringController);
    routes.delete('/monitoring/:id', (req, res, next) => {
        /**
          #swagger.tags = ['Monitoring']
        */
        next();
    }, monitoring_1.deleteMonitoringController);
};
