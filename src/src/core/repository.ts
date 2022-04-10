import Predicate from "./predicate";

export default interface IRepository<K, T> {
  get(id: K): T;
  filter(predicate: Predicate<T>): T[];
  add(entity: T): void;
  update(entity: T): void;
  delete(id: K): void;
}
