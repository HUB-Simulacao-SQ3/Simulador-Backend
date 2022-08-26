import { Router } from 'express'
import { getAllMonitoringsController, insertMonitoringController, updateMonitoringController, deleteMonitoringController } from '../../controllers/monitoringController/monitoring';

module.exports = (routes: Router) => {

  routes.get('/monitorings',
    (req, res, next) => {
      /**  
      #swagger.tags = ['Monitoring']
      #swagger.description = 'Listagem de todas as monitorizações'
      #swagger.responses[0] = {
        schema: { $ref: '#/definitions/monitoring' }
      }
    */
      next();
    }, getAllMonitoringsController);

  routes.post('/monitoring',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Monitoring']
        #swagger.parameters['monitoring'] = { 
          in: 'body', schema: { $ref: '#/definitions/monitoringInsert' } }
      */
      next()
    },
    insertMonitoringController);

  routes.put('/monitoring',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Monitoring']
        #swagger.parameters['monitoring'] = { 
          in: 'body', schema: { $ref: '#/definitions/monitoringUpdate' } }
      */
      next()
    },
    updateMonitoringController);

  routes.delete('/monitoring/:id',
    (req, res, next) => {
      /**  
        #swagger.tags = ['Monitoring']
      */
      next()
    },
    deleteMonitoringController);
}