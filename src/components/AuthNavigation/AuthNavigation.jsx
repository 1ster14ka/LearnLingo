// import loginSvg from "../../assets/login.svg";

import Login from "../Login/Login";
import Register from "../Register/Register";
import s from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <div className={s.wrapper}>
      <Login />
      <Register />
    </div>
  );
};

export default AuthNavigation;
