import { programs } from "../data.ts";

export { programs };

interface Attended {
  attendees: { userId: string }[];
}

export function findProgramById(id: string) {
  return programs.find((program) => program.id === id);
}

export function attendedByResident(id: string) {
  return (program: Attended) => {
    return program.attendees.some((attendee) => attendee.userId === id);
  };
}

export function programsAttendedByResidentId(id: string) {
  return programs.filter(attendedByResident(id));
}

function extractValues(val: string | null) {
  return val?.split(",") || [];
}

export function programsByDimensionAndLevelOfCare(
  dimension: string,
  levelOfCare: string | null,
  residentId: string,
  attended: boolean,
) {
  return programs.find((program) => {
    const dimensions = extractValues(program.dimensions);
    const levelsOfCare = extractValues(program.levelsOfCare);

    // must be the same dimension
    // must be the same level of care if provided
    // must be attended by resident if attended is true
    // must not be attended by resident if attended is false
    return dimensions.includes(dimension) &&
      (!levelOfCare || levelsOfCare.includes(levelOfCare)) &&
      (attended === attendedByResident(residentId)(program));
  });
}
