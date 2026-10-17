import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import s from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      <img src={logo} alt="logo" className={s.img} />
      <span className={s.logoText}>LearnLingo</span>
    </Link>
  );
};

export default Logo;
