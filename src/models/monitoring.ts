import { isValuesEmptyInObject } from "../utils/isValuesEmptyInObject";
import { Entity } from "./entity";

type IMonitoringType = {
  id?: string;
  temperature: number;
  pressure: number;
  created_at: Date;
  updated_at: Date;
}

class Monitoring extends Entity<IMonitoringType> {
  private constructor(props: IMonitoringType, id?: string) {
    super(props, id)
  }

  static create(props: IMonitoringType, id?: string) {
    const isEmpty = isValuesEmptyInObject(props, ['id']);
    if (isEmpty.isNull) throw new Error(`Values ​​cannot be empty: ${isEmpty.values.join(' ')}`);
    const monitoring = new Monitoring(props, id).props;
    return monitoring;
  }
}

export { Monitoring };
export type { IMonitoringType };