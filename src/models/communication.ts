import { Person } from "./person";

export interface Communication {
  id: string;
  person: Person;
  date: Date;
}
