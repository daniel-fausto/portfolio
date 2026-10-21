import { yearsOfExperience } from "./content";

export async function getYears() {
  "use cache";
  return yearsOfExperience();
}
