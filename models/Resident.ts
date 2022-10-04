import { residents } from "../data.ts";

export { residents };

export function findResidentById(id: string) {
  return residents.find((resident) => resident.userId === id);
}
