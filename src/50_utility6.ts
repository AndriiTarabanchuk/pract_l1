type Weekdays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Weekend = "Sat" | "Sun";

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
  Mon: "Понеділок",
  Tue: "Вівторок",
  Wed: "Середа",
  Thu: "Четверг",
  Fri: "П'ятниця",
  Sat: "Субота",
  Sun: "Неділя",
};
console.log(translations);
export {};
