import { Link } from "react-router-dom";

import loginSvg from "../../assets/login.svg";

import s from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <div className={s.wrapper}>
      <Link to="/login" className={s.login}>
        <img src={loginSvg} alt="login" className={s.img} />
        <span>Login</span>
      </Link>
      <Link to="/register" className={s.register}>
        Registration
      </Link>
    </div>
  );
};

export default AuthNavigation;
