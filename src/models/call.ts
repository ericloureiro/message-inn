import { useTranslation } from "react-i18next";
import { formatRecentDate } from "./../utils/functions/date";
import { isRecent, isYesterday } from "../utils/functions/date";
import { Communication } from "./communication";
import { StreamType, CallType } from "../utils/enums";

export interface ICall {
  communication: Communication;
  stream_type: StreamType;
  call_type: CallType;
  formatDate?: () => string;
}

export class Call implements ICall {
  constructor(obj: ICall) {
    this.communication = obj.communication;
    this.stream_type = obj.stream_type;
    this.call_type = obj.call_type;
  }

  communication: Communication;
  stream_type: StreamType;
  call_type: CallType;

  formatDate() {
    const { t } = useTranslation();
    const dateFormat = require("dateformat");
    const date = this.communication.date;

    if (isRecent(date)) {
      return formatRecentDate(date);
    }

    let format = `d "${t("of")}" mmmm, HH:MM`;

    if (isYesterday(date)) {
      format = `DDDD, HH:MM`;
    }

    return dateFormat(date, format);
  }
}
