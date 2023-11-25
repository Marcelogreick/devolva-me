import { format, addMinutes } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: string): string => {
  const dateFormatted = format(new Date(date), "dd/MM/yyyy - EEEE", {
    locale: ptBR,
  });
  const capitalizedDay = capitalize(dateFormatted.split(" - ")[1]);

  return `${dateFormatted.split(" - ")[0]} - ${capitalizedDay}`;
};

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function convertUSDate(date: string | Date) {
  if (typeof date === "string") {
    return date.split("/").reverse().join("-");
  }

  return format(date, "yyyy-MM-dd");
}

export function convertDate(date: string | Date) {
  if (typeof date === "string") {
    return date.split("-").reverse().join("/");
  }

  return date.toLocaleDateString();
}

export const formatDayMonth = (dateString: string) => {
  const date = new Date(dateString);
  return format(addMinutes(date, date.getTimezoneOffset()), "dd/MM/yyyy");
};

export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return format(addMinutes(date, date.getTimezoneOffset()), "HH:mm:ss");
};
