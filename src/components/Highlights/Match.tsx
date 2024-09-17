import style from "./Highlights.module.css";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { ifStringToLong } from "../../utils/ifStringToLong";

interface IProps {
  match: any | null;
}

function Match({ match }: IProps): any {
  dayjs.locale("de");
  const iframe = (): any => {
    return {
      __html: match.videos[0].embed,
    };
  };

  return (
    <div className={style.highlight}>
      <div dangerouslySetInnerHTML={iframe()} />

      <p style={{ marginTop: "12px" }}>{ifStringToLong(match.title, 30)}</p>
      <p style={{ color: "gray", fontSize: "12px", marginTop: "6px" }}>
        {match.competition} <span> - {match.videos[0].title}</span>
      </p>

      <p style={{ color: "gray", fontSize: "10px", marginTop: "6px" }}>
        {dayjs(match.date).format("MMMM D, YYYY h:mm A")}
      </p>
    </div>
  );
}

export default Match;
