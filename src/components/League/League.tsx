import { useState } from "react";
import Loader from "../Loader/Loader";
import style from "./Leagues.module.css";
interface IProps {
  data: any;
}

function League({ data }: IProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={style.league}>
      <div
        style={{
          display: loading ? "flex" : "none",
          width: "100%",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader height={24} width={24} />
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        <img
          onLoad={() => setLoading(false)}
          src={data.league.logo}
          alt={data.league.name}
          className={style.img}
        />
      </div>
      <div className="">
        <p>{data.league.name}</p>
        <p style={{ color: "gray" }}>{data.country.name}</p>
      </div>
    </div>
  );
}

export default League;
