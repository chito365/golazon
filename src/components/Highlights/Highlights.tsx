import Match from "./Match";
import style from "./Highlights.module.css";
interface IProps {
  matches: any;
}
const Highlights = ({ matches }: IProps) => {
  return (
    <div className={style.main}>
      <h3 style={{ margin: 0, padding: 0, marginTop: "24px" }}>
        New Match Highlights
      </h3>
      <div className={style.highlights}>
        {matches.slice(0, 9).map((match: any) => (
          <Match key={match.videos[0].id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Highlights;
