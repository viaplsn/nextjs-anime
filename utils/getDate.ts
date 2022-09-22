import getNumberWithOrdinal from "./getNumberWithOrdinal";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDate = () => {
  const date = new Date();
  const day = getNumberWithOrdinal(date.getDate());
  const month = months[date.getMonth()];
  const shortMonth = month.slice(0, 3);

  return { day, month, shortMonth };
};

export default getDate;
