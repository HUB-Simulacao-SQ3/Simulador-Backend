import { isValuesEmptyInObject } from "../utils/isValuesEmptyInObject";
import { Entity } from "./Entity";

type IUsersType = {
  id?: string;
  name: string;
  image?: string;
  type: UsersTypeEnum;
  email: string;
  password:string;
}

enum UsersTypeEnum { 
  'admin', 'student', 'teacher'
}

class User extends Entity<IUsersType> {
  private constructor(props: IUsersType, id?: string) {
    super(props, id);
  }

  static create(props: IUsersType, id?: string) {
    const isEmpty =  isValuesEmptyInObject(props, ['id', 'image']);
    if (isEmpty.isNull) throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
    const user = new User(props, id).props;
    return user;
  }
}

export { User };
export type { IUsersType, UsersTypeEnum };