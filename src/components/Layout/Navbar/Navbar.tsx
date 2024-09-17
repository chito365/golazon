import DropDown from "./DropDown/DropDown";
import style from "./Navbar.module.css";
import { FaGripLines } from "react-icons/fa";
import { useState } from "react";
import DropDownMobile from "./DropDown/DropDownMobile";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./Search/Search";

const Navbar = () => {
  const [hiddenNavInMobile, setHiddenNavInMobile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownMobile, setShowDropDownMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <div className={style.navbar}>
        <p onClick={() => navigate("/")} className={style.logo}>
          <span>SCH</span>
          Football
        </p>
        <button
          onClick={() => setHiddenNavInMobile(!hiddenNavInMobile)}
          className={style.navbar_toggler_button}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaGripLines />
        </button>

        <div className={style.content} id="navbarSupportedContent">
          <ul className={style.navLi}>
            <li
              style={{
                color: location.pathname === "/" ? "palevioletred" : "",
              }}
            >
              <p onClick={() => navigate("/")}>Home</p>
            </li>
            <li
              style={{
                color: location.pathname === "/leagues" ? "palevioletred" : "",
              }}
            >
              <p onClick={() => navigate("/leagues")}>League</p>
            </li>

            <li
              style={{
                color:
                  location.pathname === "/livescore" ? "palevioletred" : "",
              }}
            >
              <p onClick={() => navigate("/livescore")}>Livescores</p>
            </li>
            <li>
              <DropDown
                link={["Livescore", "Leagues"]}
                showDropDown={showDropDown}
                setShowDropDown={setShowDropDown}
              />
            </li>
          </ul>
          <Search />
        </div>

        <div
          className={
            hiddenNavInMobile
              ? style.content_mobile
              : style.content_mobile_close
          }
          id="navbarSupportedContent"
        >
          <ul className={style.navLi}>
            <li className="nav-item active">
              <p onClick={() => navigate("/")}>Home</p>
            </li>
            <li
              style={{
                color: location.pathname === "/leagues" ? "palevioletred" : "",
              }}
            >
              <p onClick={() => navigate("/leagues")}>League</p>
            </li>

            <li style={{}}>
              <p onClick={() => navigate("/livescore")}>Livescores</p>
            </li>
            <li style={{}}>
              <DropDownMobile
                link={["Livescore", "Leagues"]}
                showDropDown={showDropDownMobile}
                setShowDropDown={setShowDropDownMobile}
              />
            </li>
          </ul>
          {/* <Search /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
