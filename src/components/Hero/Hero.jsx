import HeroContent from "../HeroContent/HeroContent";
import HeroImage from "../HeroImage/HeroImage";

import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
