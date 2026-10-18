import { useTheme } from "../ThemeContext/ThemeContext";
import s from "./ThemePiker.module.css";

const ThemePiker = () => {
  const { theme, setTheme } = useTheme();
  const themes = ["yellow", "green", "blue", "pink", "orange"];

  return (
    <div className={s.themePicker}>
      {themes.map((t) => (
        <button
          type="button"
          key={t}
          onClick={() => setTheme(t)}
          className={`${s[`dot--${t}`]} ${theme === t ? s.active : ""}`}
        ></button>
      ))}
    </div>
  );
};

export default ThemePiker;
