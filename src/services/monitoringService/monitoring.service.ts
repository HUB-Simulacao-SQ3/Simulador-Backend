import { IMonitoringType, Monitoring } from "../../models/Monitoring";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllMonitoringsQuery(): Promise<Monitoring[]> {
  return QueryToAsync<Monitoring[]>('select * from  Monitoring', null);
};

async function insertMonitoringQuery(_monitoring: IMonitoringType): Promise<Monitoring[]> {
  const { pressure, temperature } = _monitoring;
  return QueryToAsync<Monitoring[]>(
    'INSERT INTO Monitoring (pressure, temperature) VALUES (?, ?);',
    [pressure, temperature]);
};

async function updateMonitoringQuery(_monitoring: IMonitoringType): Promise<Monitoring[]> {
  const { pressure, temperature, id } = _monitoring;
  return QueryToAsync<Monitoring[]>(
    'UPDATE Monitoring SET  pressure = ?, temperature = ? WHERE id = ?'
    , [pressure, temperature, id!]);
};

async function deleteMonitoringQuery(id: string): Promise<Monitoring[]> {
  return QueryToAsync<Monitoring[]>('DELETE FROM Monitoring WHERE id = ?', [id]);
};

export { getAllMonitoringsQuery, insertMonitoringQuery, updateMonitoringQuery, deleteMonitoringQuery };