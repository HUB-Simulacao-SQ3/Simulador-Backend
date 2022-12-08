"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMonitoringController = exports.updateMonitoringController = exports.insertMonitoringController = exports.getAllMonitoringsController = void 0;
const monitoring_1 = require("../../models/monitoring");
const monitoringService_1 = require("../../services/monitoringService");
const getAllMonitoringsController = async (req, res) => {
    const Monitoring = await monitoringService_1.MonitoringService.getAllMonitoringsQuery();
    return res.status(200).json(Monitoring);
};
exports.getAllMonitoringsController = getAllMonitoringsController;
const insertMonitoringController = async (req, res) => {
    const _monitoring = req.body;
    const monitoring = monitoring_1.Monitoring.create(_monitoring);
    const response = await monitoringService_1.MonitoringService.insertMonitoringQuery(monitoring);
    return res.status(200).json(response);
};
exports.insertMonitoringController = insertMonitoringController;
const updateMonitoringController = async (req, res) => {
    const _monitoring = req.body;
    const monitoring = monitoring_1.Monitoring.create(_monitoring, _monitoring.id);
    const response = await monitoringService_1.MonitoringService.updateMonitoringQuery(monitoring);
    return res.status(200).json(response);
};
exports.updateMonitoringController = updateMonitoringController;
const deleteMonitoringController = async (req, res) => {
    const { id } = req.params;
    const response = await monitoringService_1.MonitoringService.deleteMonitoringQuery(id);
    return res.status(200).json(response);
};
exports.deleteMonitoringController = deleteMonitoringController;
