export default interface Predicate<T> {
  (entity: T): boolean;
}
