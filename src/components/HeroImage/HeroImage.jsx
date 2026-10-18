import img from "../../assets/block.png";

import s from "./HeroImage.module.css";

const HeroImage = () => {
  return <img src={img} alt="" className={s.img} />;
};

export default HeroImage;
