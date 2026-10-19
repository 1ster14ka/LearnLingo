import { useTheme } from "../../context/ThemeContext/ThemeContext";
import s from "./HeroImage.module.css";

const HeroImage = () => {
  const { theme } = useTheme();
  return <img src={`/images/Mac-${theme}.png`} alt="" className={s.img} />;
};

export default HeroImage;
