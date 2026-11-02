// import loginSvg from "../../assets/login.svg";

import { useSelector } from "react-redux";
import Login from "../Login/Login";
import Register from "../Register/Register";
import s from "./AuthNavigation.module.css";
import { isLoggedInSelect, userSelect } from "../redux/Auth/selectors";
import Logout from "../Logout/Logout";

const AuthNavigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelect);
  const user = useSelector(userSelect);

  return (
    <div className={s.wrapper}>
      {isLoggedIn && <p className={s.name}>{`Hello ${user?.displayName}`}</p>}
      {isLoggedIn ? (
        <Logout />
      ) : (
        <>
          <Login />
          <Register />
        </>
      )}
    </div>
  );
};

export default AuthNavigation;
