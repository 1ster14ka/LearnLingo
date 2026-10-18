import HeroContent from "../HeroContent/HeroContent";
import HeroImage from "../HeroImage/HeroImage";

import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.hero}>
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;
