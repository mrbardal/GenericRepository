import IEntity from "../core/entity";
import Predicate from "../core/predicate";
import IRepository from "../core/repository";

export default class Repository<K, T extends IEntity<K>>
  implements IRepository<K, T> {

  get(id: K): T {
    return JSON.parse(localStorage.getItem(id.toString())) as T;
  }

  filter(predicate: Predicate<T>): T[] {
    let result: T[] = [];
    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index);
      try {
        const item = JSON.parse(localStorage.getItem(key)) as T;
        if (predicate(item)) {
          result.push(item);
        }
      } catch (error) {}
    }

    return result;
  }

  add(entity: T): void {
    if (localStorage.getItem(entity.id.toString())) {
      throw new Error("Duplicate Id");
    }
    localStorage.setItem(entity.id.toString(), JSON.stringify(entity));
  }

  update(entity: T): void {
    if (!localStorage.getItem(entity.id.toString())) {
      throw new Error(`Id ${entity.id} for update not found`);
    }

    localStorage.setItem(entity.id.toString(), JSON.stringify(entity));
  }
  
  delete(id: K): void {
    localStorage.removeItem(id.toString());
  }
}
