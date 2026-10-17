import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";
const Navigation = () => {
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
    </nav>
  );
};

export default Navigation;
