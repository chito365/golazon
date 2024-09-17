import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.title}>
          <p style={{ paddingRight: "6px" }}>사진</p>
          <p className={style.logo}>
            <span>SCH</span>
            Football
          </p>
        </div>
        <div className={style.icons}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/anandarizkyyy/"
          >
            <p>Linkedin</p>
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/anandarizkyrm"
          >
            <p>Github</p>
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/anandarizkey/"
          >
            <p>Instagram</p>
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
