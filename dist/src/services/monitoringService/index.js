"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoringService = void 0;
const monitoring_service_1 = require("./monitoring.service");
const MonitoringService = {
    getAllMonitoringsQuery: monitoring_service_1.getAllMonitoringsQuery,
    insertMonitoringQuery: monitoring_service_1.insertMonitoringQuery,
    updateMonitoringQuery: monitoring_service_1.updateMonitoringQuery,
    deleteMonitoringQuery: monitoring_service_1.deleteMonitoringQuery
};
exports.MonitoringService = MonitoringService;
