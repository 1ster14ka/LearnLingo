import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { isLoggedInSelect } from "../redux/Auth/selectors";
const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelect);

  return (
    <nav className={s.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/teachers"
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Teachers
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? s.active : s.link)}
        >
          Favorites
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
