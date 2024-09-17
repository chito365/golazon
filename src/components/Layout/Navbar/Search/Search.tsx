import { useState, useRef, useEffect } from "react";
import style from "../Navbar.module.css";
import SearchResult from "./SearchResult";

function HandleClikOutsideComponent(ref: any, setShowResult: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowResult(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShowResult]);
}

const Search = () => {
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const wrapperRef = useRef(null);
  const handleSearchChange = (e: any) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };

  HandleClikOutsideComponent(wrapperRef, setShowResult);

  return (
    <form className={style.searchForm}>
      <div ref={wrapperRef} className={style.searchContainer}>
        <input
          className={style.inputSearch}
          onChange={(e) => handleSearchChange(e)}
          type="search"
          placeholder="Teams,Players...."
          aria-label="Search"
        />
        <SearchResult
          search={search}
          setShowResult={setShowResult}
          showResult={showResult}
        />
      </div>
      <button className={style.button}> Search</button>
    </form>
  );
};

export default Search;
