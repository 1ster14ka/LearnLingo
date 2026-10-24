import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import TeacherFilters from "../../components/TeacherFilters/TeacherFilters";
import TeacherList from "../../components/TeacherList/TeacherList";
import { getTeachers } from "../../components/redux/Teachers/operations";
import Loader from "../../components/Loader/Loader";
import {
  errorSelect,
  isLoadingSelect,
  teachersSelect,
} from "../../components/redux/Teachers/selectors";

import s from "./Teachers.module.css";

const Teachers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);
  const isLoading = useSelector(isLoadingSelect);
  const error = useSelector(errorSelect);
  const teachers = useSelector(teachersSelect);

  const [filters, setFilters] = useState({ lang: "", lvl: "", price: "" });

  const changeFilters = (filter) => {
    setFilters((prev) => ({ ...prev, ...filter }));
  };

  const filterTeachers = teachers.filter((teacher) => {
    const matchesLanguage =
      !filters.lang ||
      teacher.languages.some(
        (language) => language.toLowerCase() === filters.lang.toLowerCase(),
      );

    const matchesLevel =
      !filters.lvl ||
      teacher.levels.some((level) =>
        level.toLowerCase().startsWith(filters.lvl),
      );
    const matchesPrice =
      !filters.price ||
      (teacher.price_per_hour >= Number(filters.price) - 10 &&
        teacher.price_per_hour <= Number(filters.price));
    return matchesLanguage && matchesLevel && matchesPrice;
  });

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Teachers not Found</p>;
  }
  return (
    <div className={s.pages}>
      <TeacherFilters changeFilters={changeFilters} />
      <TeacherList teachers={filterTeachers} />
    </div>
  );
};

export default Teachers;
