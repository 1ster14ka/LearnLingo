import loginSvg from "../../assets/login.svg";

import s from "./AuthNavigation.module.css";

const AuthNavigation = () => {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.login}>
        <img src={loginSvg} alt="login" className={s.img} />
        <span>Login</span>
      </button>
      <button type="button" className={s.register}>
        Registration
      </button>
    </div>
  );
};

export default AuthNavigation;
