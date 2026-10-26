import { useState } from "react";
import { LuBookOpen } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";

import DescriptionList from "../DescriptionList/DescriptionList";
import LanguageLevelList from "../LanguageLevelList/LanguageLevelList";
import ReadMore from "../ReadMore/ReadMore";
import CommentList from "../CommentList/CommentList";

import s from "./TeacherCard.module.css";

const TeacherCard = ({
  filters,
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
  },
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li className={s.item}>
      <div className={s.wrapperImg}>
        <img src={avatar_url} alt={`${name} ${surname}`} className={s.img} />
      </div>
      <div className={s.wrapperContent}>
        <span className={s.label}>Languages</span>
        <ul className={s.listLessons}>
          <li className={s.itemLessons}>
            <LuBookOpen className={s.iconBook} />
            Lessons online
          </li>
          <li className={s.itemLessons}>Lessons done {lessons_done}</li>
          <li className={s.itemLessons}>
            <IoMdStar className={s.iconStar} />
            Rating: {rating}
          </li>
          <li className={s.itemLessons}>
            Price / 1 hour: <span className={s.price}>{price_per_hour}$</span>
          </li>
        </ul>
        <p className={s.name}>
          {name} {surname}
        </p>
        <DescriptionList
          languages={languages}
          lessonInfo={lesson_info}
          conditions={conditions}
        />
        {isVisible && (
          <CommentList comments={reviews} experience={experience} />
        )}

        <ReadMore onChangeVisible={setIsVisible} isVisible={isVisible} />

        <LanguageLevelList levels={levels} selectedLevel={filters.lvl} />
      </div>
    </li>
  );
};

export default TeacherCard;
