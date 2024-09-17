import { useEffect } from "react";
import Loader from "../../../Loader/Loader";
import style from "../Navbar.module.css";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_PLAYER } from "../../../../GraphQL/Queries";
import PlayerResultSearch from "./PlayerResultSearch/PlayerResultSearch";
interface IProps {
  search: string;
  showResult: any;
  setShowResult: any;
}

const SearchResult = ({ search, showResult, setShowResult }: IProps) => {
  const [executeSearch, { error, data, loading }] = useLazyQuery(SEARCH_PLAYER);

  useEffect(() => {
    if (search.length >= 3) {
      setShowResult(true);
      executeSearch({
        variables: { search: search },
      });
    } else {
      setShowResult(false);
    }
    //eslint-disable-next-line
  }, [search]);

  if (!showResult || error) return null;
  return (
    <div className={style.searchResult}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? (
          <Loader height={20} width={20} />
        ) : data.searchPlayer.length > 0 ? (
          data.searchPlayer.map((data: any, idx: any) => (
            <PlayerResultSearch key={idx} data={data} />
          ))
        ) : (
          <p style={{ color: "black", padding: 0, margin: 0 }}>
            Data Not Found
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
