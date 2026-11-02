import { useDispatch } from "react-redux";
import { logout } from "../redux/Auth/authSlice";

import s from "./Logout.module.css";
const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(logout())} className={s.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
