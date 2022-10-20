import { IUsersType, User } from "../../models/users";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllUsersQuery(): Promise<User[]> {
  return QueryToAsync<User[]>('select * from Users', null);
};

async function insertUserQuery(users: IUsersType): Promise<User[]> {
  const { name, email, id } = users;
  return QueryToAsync<User[]>('INSERT INTO Users(id,name,email) VALUES (?,?,?);', [id!, name, email]);
};

async function updateUserQuery(users: IUsersType): Promise<User[]> {
  const { name, email, id } = users;
  return QueryToAsync<User[]>('UPDATE Users SET name = ?, email = ? WHERE id = ?', [name, email, id!]);
};

async function getUserQuery(id: string): Promise<User[]> {
  return QueryToAsync<User[]>('SELECT * FROM Users WHERE id = ?', [id]);
};

async function deleteUserQuery(id: string): Promise<User[]> {
  return QueryToAsync<User[]>('DELETE FROM Users WHERE id = ?', [id]);
};

export { getAllUsersQuery, insertUserQuery, updateUserQuery, getUserQuery, deleteUserQuery };