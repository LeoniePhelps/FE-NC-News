const dayjs = require("dayjs");

export const dateFormatterSingle = (date) => {
  const monthDayYear = dayjs(date).format("DD MMMM YYYY, HH:mm");
  return monthDayYear;
};

export const dateFormatterCard = (date) => {
  const monthDayYear = dayjs(date).format("MMM DD");
  return monthDayYear;
};
