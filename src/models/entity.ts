import { v4 } from "uuid";

abstract class Entity<T> {
  protected props: T;

  constructor(props: T, id?: string) {
    this.props = { ...props, id: id ?? v4() };
  }
}

export { Entity }