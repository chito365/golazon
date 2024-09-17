const getCurrentStatus = (status) => {
  let check = Number(status.split("'").join(""));
  if (isNaN(check)) {
    return status;
  } else {
    return check;
  }
};

export default getCurrentStatus;
