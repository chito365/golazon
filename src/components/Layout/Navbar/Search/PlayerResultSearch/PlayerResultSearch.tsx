import { getAbberviation } from "../../../../../utils/getAbbreviation";
import style from "./PlayerResultSearch.module.css";

interface IProps {
  data: any;
}
function PlayerResultSearch({ data }: IProps) {
  return (
    <div className={style.main}>
      <img
        style={{ padding: "2px" }}
        width={60}
        height={60}
        alt={data.photo}
        src={data.photo}
      />

      <div className={style.textContainer}>
        <p>
          {data.firstName}
          <span style={{ fontWeight: 500 }}> {data.lastName}</span>
        </p>
        <div style={{ display: "flex" }}>
          {data?.position?.map((data: any, idx: number) => (
            <p
              key={idx}
              style={{
                fontSize: "12px",
                marginRight: "12px",
                color: "gray",
              }}
            >
              {data}
            </p>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: "12px",
              padding: "0px",
              margin: "0px",
              marginRight: "4px",
            }}
          >
            {data.club} {getAbberviation(data.club)}
          </p>
          <img width={20} height={20} src={data.logo} alt={data.logo} />
        </div>
      </div>
    </div>
  );
}

export default PlayerResultSearch;
