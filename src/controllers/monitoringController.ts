import { Request, Response } from "express";
import { IMonitoringType, Monitoring } from "../models/monitoring";
import { MonitoringService } from "../services/monitoringService";

const getAllMonitoringsController = async (req: Request, res: Response) => {
  const Monitoring: Monitoring[] = await MonitoringService.getAllMonitoringsQuery();
  return res.status(200).json(Monitoring);
}

const insertMonitoringController = async (req: Request, res: Response) => {
  const _monitoring: IMonitoringType = req.body;
  const monitoring = Monitoring.create(_monitoring);
  const response = await MonitoringService.insertMonitoringQuery(monitoring);
  return res.status(200).json(response);
}

const updateMonitoringController = async (req: Request, res: Response) => {
  const _monitoring: IMonitoringType = req.body;
  const monitoring = Monitoring.create(_monitoring, _monitoring.id);
  const response = await MonitoringService.updateMonitoringQuery(monitoring);
  return res.status(200).json(response);
}

const deleteMonitoringController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await MonitoringService.deleteMonitoringQuery(id);
  return res.status(200).json(response);
}

export {
  getAllMonitoringsController,
  insertMonitoringController,
  updateMonitoringController,
  deleteMonitoringController
};