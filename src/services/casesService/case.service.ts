import { ICaseType, Case } from "../../models/Case";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllCasesQuery(): Promise<Case[]> {
  return QueryToAsync<Case[]>('select * from  Cases', null);
};

async function getAllCasesIdQueryJoin(id: string): Promise<Case[]> {
  return QueryToAsync<Case[]>('SELECT * FROM Cases INNER JOIN Monitoring ON (Monitoring.id = Cases.monitoring_id) INNER JOIN Patients ON (Patients.id = Cases.patient_id) WHERE Cases.id = ?', [id]);
};

async function getAllCasesQueryJoin(): Promise<Case[]> {
  return QueryToAsync<Case[]>('SELECT * FROM Cases INNER JOIN Monitoring ON (Monitoring.id = Cases.monitoring_id) INNER JOIN Patients ON (Patients.id = Cases.patient_id)', null);
};

async function insertCaseQuery(_cases: ICaseType): Promise<Case> {
  const { title, description, scenery, patient_id, monitoring_id, users_id} = _cases;
  return QueryToAsync<Case>(
    'INSERT INTO Cases (title, description, scenery, patient_id, monitoring_id, users_id) VALUES (?, ?, ?, ?, ?, ?);',
    [title, description, scenery, patient_id!, monitoring_id!, users_id!]);
};

async function updateCaseQuery(_cases: ICaseType): Promise<Case> {
  const { title, description, scenery, id } = _cases;
  return QueryToAsync<Case>(
    'UPDATE Cases SET title = ?, description = ?, scenery = ? WHERE id = ?'
    , [title, description, scenery, id!]);
};

async function deleteCaseQuery(id: string): Promise<Case> {
  return QueryToAsync<Case>('DELETE FROM Cases WHERE id = ?', [id]);
};

export { getAllCasesQuery, insertCaseQuery, updateCaseQuery, deleteCaseQuery, getAllCasesQueryJoin, getAllCasesIdQueryJoin };