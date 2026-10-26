import s from "./TeacherFilters.module.css";

const TeacherFilters = ({ changeFilters }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    changeFilters({ [name]: value });
  };
  return (
    <div className={s.filters}>
      <label className={s.field}>
        <span className={s.label}>Languages</span>
        <select
          className={s.select}
          name="lang"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="">Select language</option>
          <option value="English">English</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="polish">Polish</option>
          <option value="spanish">Spanish</option>
          <option value="italian">Italian</option>
          <option value="korean">Korean</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="mandarin chinese">Mandarin Chinese</option>
        </select>
      </label>

      <label className={s.field}>
        <span className={s.label}>Level of knowledge</span>
        <select
          className={s.select}
          name="lvl"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="">Select Level</option>
          <option value="a1">A1 Beginner</option>
          <option value="a2">A2 Elementary</option>
          <option value="b1">B1 Intermediate</option>
          <option value="b2">B2 Upper-Intermediate</option>
          <option value="c1">C1 Advanced</option>
          <option value="c2">C2 Proficient</option>
        </select>
      </label>

      <label className={s.field}>
        <span className={s.label}>Price</span>
        <select
          className={s.select}
          name="price"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="">Select Price</option>
          <option value="20">10-20 $</option>
          <option value="30">20-30 $</option>
          <option value="40">30-40 $</option>
          <option value="50">40-50 $</option>
        </select>
      </label>
    </div>
  );
};

export default TeacherFilters;
