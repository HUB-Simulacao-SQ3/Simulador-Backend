import { isValuesEmptyInObject } from "../utils/isValuesEmptyInObject";
import { Entity } from "./entity";

type IPatientsType = {
  id?: string;
  name: string;
  chief_complaint: string; //queixa principal
  professional: string;
  age: number;
  weight: number;
  imc: number;
  created_at: Date;
}

class Patient extends Entity<IPatientsType> {
  private constructor(props: IPatientsType, id?: string) {
    super(props, id)
  }

  static create(props: IPatientsType, id?: string) {
    const isEmpty = isValuesEmptyInObject(props, ['id']);
    if(isEmpty.isNull) throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
    const patient = new Patient(props, id).props;
    return patient;
  }
}

export { Patient };
export type { IPatientsType };