// import { default as MapRepository } from "./data/map.repository";
// import { default as LocalRepository } from "./data/local.repository";

// export { MapRepository, LocalRepository };

export { default as MapRepository } from "./data/map.repository";
export { default as LocalRepository } from "./data/local.repository";

export enum RepositoryStorage {
  Map,
  Local,
}
