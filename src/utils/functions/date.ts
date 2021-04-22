import moment from "moment";
import { useTranslation } from "react-i18next";

export const sortDatesByNew = (date1: Date, date2: Date): number => {
  if (date1 < date2) {
    return 1;
  }

  if (date1 > date2) {
    return -1;
  }

  return 0;
};

export const formatRecentDate = (date: Date): string => {
  const m = moment();
  const { t } = useTranslation();

  const minutes = m.diff(date, "minutes");

  if (minutes <= 5) {
    return t("now");
  }

  if (minutes <= 60) {
    return t("minutesAgo", { count: minutes });
  }

  const hours = m.diff(date, "hours");

  return t("hoursAgo", { count: hours });
};

export const isRecent = (date: Date): boolean => {
  const m = moment();

  return m.diff(date, "days") < 1;
};

export const isToday = (date: Date): boolean => {
  const d = new Date();

  return isSameDay(d, date);
};

export const isYesterday = (date: Date): boolean => {
  const d = new Date();
  d.setDate(d.getDate() - 1);

  return isSameDay(d, date);
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getUTCFullYear() === date2.getUTCFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
