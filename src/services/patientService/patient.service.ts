import { IPatientsType, Patient } from "../../models/Patient";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllPatientsQuery(): Promise<Patient[]> {
  return QueryToAsync<Patient[]>('select * from Patients', null);
};

async function insertPatientQuery(Patients: IPatientsType): Promise<Patient[]> {
  const { name, age, chief_complaint, imc, professional, weight } = Patients;
  return QueryToAsync<Patient[]>(
    'INSERT INTO Patients(name, age, chief_complaint, imc, professional, weight) VALUES (?, ?, ?, ?, ?, ?);', 
    [name, age, chief_complaint, imc, professional, weight]);
};

async function updatePatientQuery(Patients: IPatientsType): Promise<Patient[]> {
  const { name, age, chief_complaint, imc, professional, weight, id } = Patients;
  return QueryToAsync<Patient[]>(
    'UPDATE Patients SET  name = ?, age = ?, chief_complaint = ?, imc = ?, professional = ?, weight = ? WHERE id = ?'
    , [name, age, chief_complaint, imc, professional, weight, id!]);
};

async function deletePatientQuery(id: string): Promise<Patient[]> {
  return QueryToAsync<Patient[]>('DELETE FROM Patients WHERE id = ?', [id]);
};

export { getAllPatientsQuery, insertPatientQuery, updatePatientQuery, deletePatientQuery };