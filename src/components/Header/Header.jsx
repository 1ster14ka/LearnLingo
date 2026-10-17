import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
      <AuthNavigation />
    </header>
  );
};

export default Header;
