const isLive = (status) => {
  let check = Number(status.split("'").join(""));
  return !isNaN(check);
};

export default isLive;
