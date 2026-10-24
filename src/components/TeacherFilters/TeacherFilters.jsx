const TeacherFilters = ({ changeFilters }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    changeFilters({ [name]: value });
  };
  return (
    <>
      <label>
        <span>Languages</span>
        <select name="lang" onChange={handleChange}>
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
      <label>
        <span>Level of knowledge</span>
        <select name="lvl" onChange={handleChange}>
          <option value="">Select Level</option>
          <option value="a1">A1 Beginner</option>
          <option value="a2">A2 Elementary</option>
          <option value="b1">B1 Intermediate</option>
          <option value="b2">B2 Upper-Intermediate</option>
          <option value="c1">C1 Advanced</option>
          <option value="c2">C2 Proficient</option>
        </select>
      </label>
      <label>
        <span>Price</span>
        <select name="price" onChange={handleChange}>
          <option value="">Select Price</option>
          <option value="20">10-20 $</option>
          <option value="30">20-30 $</option>
          <option value="40">30-40 $</option>
          <option value="50">40-50 $</option>
        </select>
      </label>
    </>
  );
};

export default TeacherFilters;
