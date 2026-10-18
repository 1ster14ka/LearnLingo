import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Navigation from "../Navigation/Navigation";
import useMedia from "../../hooks/useMedia";
import ThemePiker from "../ThemePicker/ThemePiker";

import s from "./MobileMenu.module.css";

const MobileMenu = () => {
  const { isDesktop } = useMedia();

  return isDesktop ? null : (
    <div className={s.mobileMenu}>
      <AuthNavigation />
      <ThemePiker />
      <Navigation />
    </div>
  );
};

export default MobileMenu;
