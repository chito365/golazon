const getStatBarColor = (first, second) => {
  if (first == second) {
    return "rgba(0, 51, 102, 0.3)";
  } else if (first > second) {
    return "rgba(0, 51, 102, 0.6)";
  } else if (first < second) {
    return "rgba(0, 51, 102, 0.3)";
  }
};

export default getStatBarColor;
