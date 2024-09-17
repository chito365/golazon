const getMatchDate = (rawApiDate) => {
  const apiDate = String(rawApiDate);
  const year = apiDate.substring(0, 4);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ][Number(apiDate.substring(4, 6)) - 1];
  const day = apiDate.substring(6, 8);
  const hour = apiDate.substring(8, 10);
  const minute = apiDate.substring(10, 12);
  const time = `${hour}:${minute}`;
  const date = `${day} ${month} ${year}`;
  return `${date}, ${time}`;
};

export default getMatchDate;
