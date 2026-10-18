import s from "./Statistics.module.css";

const Statistics = () => {
  return (
    <section className={s.statistics}>
      <div className={s.container}>
        <ul className={s.list}>
          <li className={s.item}>
            <span className={s.num}>32,000 +</span>
            <p className={s.text}>Experienced tutors</p>
          </li>
          <li className={s.item}>
            <span className={s.num}>300,000 +</span>
            <p className={s.text}>5-star tutor reviews</p>
          </li>
          <li className={s.item}>
            <span className={s.num}>120 +</span>
            <p className={s.text}>Subjects taught</p>
          </li>
          <li className={s.item}>
            <span className={s.num}>200 +</span>
            <p className={s.text}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Statistics;
