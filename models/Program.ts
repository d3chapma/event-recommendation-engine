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
