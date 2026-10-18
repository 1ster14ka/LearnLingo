import s from "./HeroContent.module.css";

const HeroContent = () => {
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
      <button className={s.btn}>Get started</button>
    </div>
  );
};

export default HeroContent;
