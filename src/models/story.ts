import { Status } from "./status";

export interface Story {
  recent: Status[];
  seen: Status[];
  silent: Status[];
}
