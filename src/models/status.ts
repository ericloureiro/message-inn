import { StatusType } from "./../utils/enums";
import { Communication } from "./communication";

export interface IStatus {
  communication: Communication;
  count: number;
  type: StatusType;
}

export class Status implements IStatus {
  communication: Communication;
  count: number;
  type: StatusType;

  constructor(obj: IStatus) {
    this.communication = obj.communication;
    this.count = obj.count;
    this.type = obj.type;
  }

  formatDate() {
    const dateFormat = require("dateformat");

    return dateFormat(this.communication.date, "DDDD HH:MM");
  }
}
