import { useState } from "react";
import { LuBookOpen } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import DescriptionList from "../DescriptionList/DescriptionList";
import LanguageLevelList from "../LanguageLevelList/LanguageLevelList";
import ReadMore from "../ReadMore/ReadMore";
import CommentList from "../CommentList/CommentList";

import s from "./TeacherCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteTeacher,
  deleteFavoriteTeacher,
} from "../redux/Teachers/operations";
import { userSelect } from "../redux/Auth/selectors";
import { favoriteTeachersSelect } from "../redux/Teachers/selectors";

import iziToast from "izitoast";

const TeacherCard = ({
  filters = {},
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
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(userSelect);
  const favoritesTeachers = useSelector(favoriteTeachersSelect);
  const isFavorite = favoritesTeachers.some((teacher) => teacher.id === id);

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
        <button
          className={s.btnFavorite}
          onClick={() => {
            if (!user) {
              iziToast.error({
                title: "Error",
                message: "Please log in to add teachers to favorites",
                position: "topRight",
              });
              return;
            }
            if (!isFavorite) {
              dispatch(addFavoriteTeacher({ user, teacherId: id }));
            } else {
              dispatch(deleteFavoriteTeacher({ user, teacherId: id }));
            }
          }}
        >
          {!isFavorite ? (
            <MdFavoriteBorder className={s.iconFavorite} />
          ) : (
            <MdFavorite className={s.iconFavorite} />
          )}
        </button>
      </div>
    </li>
  );
};

export default TeacherCard;
