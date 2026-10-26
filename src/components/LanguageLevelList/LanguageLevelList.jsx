import s from "./LanguageLevelList.module.css";

const LanguageLevelList = ({ levels, selectedLevel }) => {
  return (
    <ul className={s.levelList}>
      {levels.map((level) => (
        <li
          className={`${s.levelItem} ${selectedLevel && level.toLowerCase().startsWith(selectedLevel) ? s.active : ""} `}
          key={level}
        >
          {level}
        </li>
      ))}
    </ul>
  );
};

export default LanguageLevelList;
