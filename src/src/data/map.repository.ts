import IEntity from "../core/entity";
import Predicate from "../core/predicate";
import IRepository from "../core/repository";

export default class Repository<K, T extends IEntity<K>>
  implements IRepository<K, T> {

  private storagte = new Map<K, T>();

  get(id: K): T {
    return this.storagte.get(id);
  }

  filter(predicate: Predicate<T>): T[] {
    let result: T[] = [];
    this.storagte.forEach((item) => {
      if (predicate(item)) {
        result.push(item);
      }
    });

    return result;
  }

  add(entity: T): void {
    if (this.storagte.has(entity.id)) {
      throw new Error("Duplicate Id");
    }
    this.storagte.set(entity.id, entity);
  }

  update(entity: T): void {
    if (!this.storagte.has(entity.id)) {
      throw new Error(`Id ${entity.id} for update not found`);
    }
    this.storagte.set(entity.id, entity);
  }

  delete(id: K): void {
    this.storagte.delete(id);
  }
}
