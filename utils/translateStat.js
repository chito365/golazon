export const statsArr = [
  "Fls",
  "Ths",
  "Ofs",
  "Pss",
  "Cos",
  "Ycs",
  "Shon",
  "Shof",
  "Shbl",
  "Att",
  "Gks",
  "Goa",
];
const translateStat = (stat) => {
  switch (stat) {
    case "Fls":
      return "Fouls";
    case "Shbl":
      return "Blocked Shots";
    case "Pss":
      return "Possession (%)";
    case "Shon":
      return "Shots on target";
    case "Shof":
      return "Shots off target";
    case "Cos":
      return "Corner kicks";
    case "Ofs":
      return "Offsides";
    case "Ths":
      return "Throw ins";
    case "Ycs":
      return "Yellow cards";
    case "Goa":
      return "Goal kicks";
    case "Gks":
      return "Goalkeeper saves";
    case "Att":
      return "Attacks";
    default:
      break;
  }
};

export default translateStat;
