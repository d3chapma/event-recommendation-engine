import {
  programsAttendedByResidentId,
  programsByDimensionAndLevelOfCare,
} from "./Program.ts";
import { findResidentById } from "./Resident.ts";

interface Program {
  dimensions: string;
  facilitators: string;
  hobbies: string | null;
}

function sortedByPopularity(
  array: Program[],
  key: keyof Program,
) {
  if (key === null) return [];

  const allValues = array.flatMap((val) => {
    return val[key]?.split(",") || [];
  });

  const countedValues = allValues.reduce((memo, val) => {
    if (!memo[val]) memo[val] = 0;

    memo[val]++;

    return memo;
  }, {} as Record<string, number>);

  return Object.keys(countedValues).sort((key) => countedValues[key]);
}

export function recommendedProgramsForResident(id: string) {
  const resident = findResidentById(id);

  if (!resident) return [];

  const attended = programsAttendedByResidentId(id);

  const popularDimensions = sortedByPopularity(attended, "dimensions");
  const levelOfCare = resident.levelOfCare;

  return [
    programsByDimensionAndLevelOfCare(
      popularDimensions[0],
      levelOfCare,
      id,
      true,
    ),
    programsByDimensionAndLevelOfCare(
      popularDimensions[1],
      levelOfCare,
      id,
      true,
    ),
    programsByDimensionAndLevelOfCare(
      popularDimensions[0],
      levelOfCare,
      id,
      false,
    ),
  ];
}
