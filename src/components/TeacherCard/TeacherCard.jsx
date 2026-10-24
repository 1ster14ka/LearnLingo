import DescriptionList from "../DescriptionList/DescriptionList";
import LanguageLevelList from "../LanguageLevelList/LanguageLevelList";
import ReadMore from "../ReadMore/ReadMore";

const TeacherCard = ({
  info: {
    avatar_url,
    name,
    surname,
    lessons_done,
    levels,
    languages,
    lesson_info,
    conditions,
    experience,
    rating,
    price_per_hour,
    reviews,
    id,
  },
}) => {
  return (
    <li>
      <img src={avatar_url} alt={`${name} ${surname}`} />
      <span>Languages</span>

      <ul>
        <li>Lessons online</li>
        <li>Lessons done {lessons_done}</li>
        <li>Rating: {rating}</li>
        <li>Price / 1 hour: {price_per_hour}</li>
      </ul>
      <p>
        {name} {surname}
      </p>
      <DescriptionList
        languages={languages}
        lessonInfo={lesson_info}
        conditions={conditions}
      />
      <ReadMore />
      <LanguageLevelList levels={levels} />
    </li>
  );
};

export default TeacherCard;
