import { IUsersType, User } from "../../models/users";
import { QueryToAsync } from "../../utils/queryToPromise";

async function getAllUsersQuery(): Promise<User[]> {
  return QueryToAsync<User[]>('select * from Users', null);
};

async function getUserLoginQuery(users: IUsersType): Promise<IUsersType[]> {
  const { password, email } = users;
  return QueryToAsync<IUsersType[]>('select * from Users WHERE email = ? AND password = ? ', [email, password]);
};

async function insertUserQuery(users: IUsersType): Promise<User[]> {
  const { name, email, id } = users;
  return QueryToAsync<User[]>('INSERT INTO Users(name,email,password) VALUES (?,?,?);', [name, email, 'teste']);
};

async function updateUserQuery(users: IUsersType): Promise<User[]> {
  const { name, email, id } = users;
  return QueryToAsync<User[]>('UPDATE Users SET name = ?, email = ? WHERE id = ?', [name, email, id!]);
};

async function deleteUserQuery(id: string): Promise<User[]> {
  return QueryToAsync<User[]>('DELETE FROM Users WHERE id = ?', [id]);
};

export { getAllUsersQuery, insertUserQuery, updateUserQuery, deleteUserQuery, getUserLoginQuery };