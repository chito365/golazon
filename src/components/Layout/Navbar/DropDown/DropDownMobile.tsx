import style from "./DropDown.module.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

interface IProps {
  link: string[];
  showDropDown: any;
  setShowDropDown: any;
}
function DropDownMobile({ link, setShowDropDown, showDropDown }: IProps) {
  const navigate = useNavigate();
  const componentRef = useRef();
  const handleCloseDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (!ref.contains(e.target)) {
          setShowDropDown(false);
        }
      }
    }
  }, [setShowDropDown]);

  return (
    <div
      ref={componentRef as any}
      onClick={handleCloseDropDown}
      className={style.dropdown_mobile}
    >
      <button className={style.dropbtn_mobile}>
        Dropdown
        <FaAngleDown style={{ marginLeft: "12px" }} />
      </button>
      <div
        ref={componentRef as any}
        className={showDropDown ? style.dropdown_content : style.hidden}
        id="myDropdown"
      >
        {link.map((data: any, idx: number) => (
          <p key={idx} onClick={() => navigate(`/${data.toLowerCase()}`)}>
            {data}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DropDownMobile;
