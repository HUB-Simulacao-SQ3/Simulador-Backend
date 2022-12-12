import { v4 } from "uuid";
import { isValuesEmptyInObject } from "../utils/isValuesEmptyInObject";
import { Entity } from "./entity";
import { IQuizType } from "./quiz";

type ICaseType = {
  id?: string;
  case_id?: string;
  title: string;
  description: string;
  scenery: string;
  quizS?: IQuizType[];
  patient_id?: string;
  monitoring_id?: string;
  users_id?: string;
  created_at: Date;
  updated_at: Date;
}

class Case extends Entity<ICaseType> {
  private constructor(props: ICaseType, id?: string) {
    super(props, id)
  }

  static create(props: ICaseType, id?: string) {
    const isEmpty = isValuesEmptyInObject(props, ['id']);
    if (isEmpty.isNull) throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
    props.case_id = v4();
    const _case = new Case(props, id).props;
    return _case;
  }
}

export { Case };
export type { ICaseType };
