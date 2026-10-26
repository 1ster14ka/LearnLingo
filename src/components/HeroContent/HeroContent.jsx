import { useNavigate } from "react-router-dom";
import s from "./HeroContent.module.css";

const HeroContent = () => {
  const navigation = useNavigate();
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        Unlock your potential with the best{" "}
        <span className={s.language}>language</span> tutors
      </h1>
      <p className={s.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button className={s.btn} onClick={() => navigation("/teachers")}>
        Get started
      </button>
    </div>
  );
};

export default HeroContent;
