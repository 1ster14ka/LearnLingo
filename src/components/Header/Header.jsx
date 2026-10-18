import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import MobileMenu from "../MobileMenu/MobileMenu";
import ThemePiker from "../ThemePicker/ThemePiker";
import useMedia from "../../hooks/useMedia";

import { TbSwitchVertical } from "react-icons/tb";
import { useState } from "react";

import s from "./Header.module.css";

const Header = () => {
  const { isMobileOrTablet, isDesktop } = useMedia();
  const [toggleModal, setToggleModal] = useState(false);

  const handleClick = () => {
    setToggleModal((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <div className={`${s.container} ${s.headerContainer}`}>
        <Logo />
        {isMobileOrTablet && (
          <button onClick={() => handleClick()} className={s.btn}>
            <TbSwitchVertical />
          </button>
        )}
        {isDesktop && (
          <>
            <Navigation />
            <ThemePiker />
            <AuthNavigation />
          </>
        )}
      </div>
      {toggleModal && <MobileMenu />}
    </header>
  );
};

export default Header;
