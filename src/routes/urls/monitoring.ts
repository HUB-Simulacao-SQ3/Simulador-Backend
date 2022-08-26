import { Router } from 'express'
import { getAllMonitoringsController, insertMonitoringController, updateMonitoringController, deleteMonitoringController } from '../../controllers/monitoringController/monitoring';

module.exports = (routes: Router) => {
  routes.get('/monitorings', getAllMonitoringsController);
  routes.post('/monitoring', insertMonitoringController);
  routes.put('/monitoring', updateMonitoringController);
  routes.delete('/monitoring/:id', deleteMonitoringController);
}