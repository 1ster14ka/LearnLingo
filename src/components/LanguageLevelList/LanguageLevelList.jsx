const LanguageLevelList = ({ levels }) => {
  return (
    <ul>
      {levels.map((level) => (
        <li key={level}>{level}</li>
      ))}
    </ul>
  );
};

export default LanguageLevelList;
