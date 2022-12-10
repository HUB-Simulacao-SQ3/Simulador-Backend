import { Request, Response } from "express";
import { IPatientsType, Patient } from "../../models/patient";
import { ResponseModel } from "../../models/response";
import { PatientService } from "../../services/patientService/";

const getAllPatientsController = async (req: Request, res: Response) => {
  const patient: Patient[] = await PatientService.getAllPatientsQuery();
  return res.status(200).json(new ResponseModel(patient, true, []));
}

const insertPatientController = async (req: Request, res: Response) => {
  const _patient: IPatientsType = req.body;
  const patient = Patient.create(_patient);
  const response = await PatientService.insertPatientQuery(patient);
  return res.status(200).json(new ResponseModel(response, true, []));;
}

const updatePatientController = async (req: Request, res: Response) => {
  const _patient: IPatientsType = req.body;
  const patient = Patient.create(_patient, _patient.id);
  const response = await PatientService.updatePatientQuery(patient);
  return res.status(200).json(new ResponseModel(response, true, []));;
}

const deletePatientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await PatientService.deletePatientQuery(id);
  return res.status(200).json(new ResponseModel(response, true, []));;
}

export {
  getAllPatientsController,
  insertPatientController,
  updatePatientController,
  deletePatientController
};