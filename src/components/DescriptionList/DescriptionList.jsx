import s from "./DescriptionList.module.css";

const DescriptionList = ({ languages, lessonInfo, conditions }) => {
  return (
    <ul className={s.descriptionList}>
      <li className={s.descriptionItem}>
        <p>
          <span className={s.title}>Speaks: </span>
          <span className={`${s.text} ${s.lang} `}>{languages.join(" ")}</span>
        </p>
      </li>
      <li className={s.descriptionItem}>
        <p>
          <span className={s.title}>Lesson Info: </span>
          <span className={s.text}>{lessonInfo}</span>
        </p>
      </li>
      <li className={s.descriptionItem}>
        <p>
          <span className={s.title}>Conditions: </span>
          <span className={s.text}>{conditions}</span>
        </p>
      </li>
    </ul>
  );
};

export default DescriptionList;
