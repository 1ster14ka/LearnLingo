const DescriptionList = ({ languages, lessonInfo, conditions }) => {
  return (
    <ul>
      <li>
        <span>Speaks:</span> <span>{languages}</span>
      </li>
      <li>
        <span>Lesson Info:</span> <span>{lessonInfo}</span>
      </li>
      <li>
        <span>Conditions:</span> <span>{conditions}</span>
      </li>
    </ul>
  );
};

export default DescriptionList;
