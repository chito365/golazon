import IframeResizer from "iframe-resizer-react";
import style from "./LiveScore.module.css";

const LiveScore = () => {
  return (
    <div className={style.main}>
      <IframeResizer
        heightCalculationMethod="lowestElement"
        inPageLinks
        frameBorder="0"
        src="https://www.scorebat.com/embed/livescore/"
        className={style.iFrame}
      />
    </div>
  );
};

export default LiveScore;
