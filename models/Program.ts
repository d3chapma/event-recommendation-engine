import { programs } from "../data.ts";

export { programs };

export function findProgramById(id: string) {
  return programs.find((program) => program.id === id);
}
