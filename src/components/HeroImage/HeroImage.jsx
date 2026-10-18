import { useTheme } from "../ThemeContext/ThemeContext";
import s from "./HeroImage.module.css";

const HeroImage = () => {
  const { theme } = useTheme();
  return (
    <img
      src={`../../../public/images/Mac-${theme}.png`}
      alt=""
      className={s.img}
    />
  );
};

export default HeroImage;
