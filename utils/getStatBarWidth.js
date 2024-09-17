const getStatBarWidth = (first, second) => {
  return `${(first / (first + second)) * 100}%`;
};

export default getStatBarWidth;
