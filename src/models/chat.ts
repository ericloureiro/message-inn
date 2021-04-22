import { isToday } from "./../utils/functions/date";
import { isYesterday } from "../utils/functions/date";
import { Communication } from "./communication";

export interface IChat {
  communication: Communication;
  last_message: string;
  formatDate?: () => string;
}

export class Chat implements IChat {
  communication: Communication;
  last_message: string;

  constructor(obj: IChat) {
    this.communication = obj.communication;
    this.last_message = obj.last_message;
  }

  formatDate() {
    const date = this.communication.date;
    const dateFormat = require("dateformat");
    let format = "dd/mm/yyyy";

    if (isToday(date)) {
      format = "HH:MM";
    }

    if (isYesterday(date)) {
      format = "DDDD";
    }

    return dateFormat(date, format);
  }
}
