import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import TeacherFilters from "../../components/TeacherFilters/TeacherFilters";
import TeacherList from "../../components/TeacherList/TeacherList";
import {
  getFavoritesTeachers,
  getTeachers,
} from "../../components/redux/Teachers/operations";
import Loader from "../../components/Loader/Loader";
import {
  errorSelect,
  isLoadingSelect,
  teachersSelect,
} from "../../components/redux/Teachers/selectors";

import s from "./Teachers.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Header from "../../components/Header/Header";
import { userSelect } from "../../components/redux/Auth/selectors";

const Teachers = () => {
  const isLoading = useSelector(isLoadingSelect);
  const error = useSelector(errorSelect);
  const teachers = useSelector(teachersSelect);
  const user = useSelector(userSelect);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.localId && user.idToken) {
      dispatch(getFavoritesTeachers(user));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const [filters, setFilters] = useState({ lang: "", lvl: "", price: "" });
  const [visibleCount, setVisibleCount] = useState(3);

  const changeFilters = (filter) => {
    setFilters((prev) => ({ ...prev, ...filter }));
    setVisibleCount(3);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
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

  const visibleTeachers = filterTeachers.slice(0, visibleCount);
  const hasMore = visibleCount < filterTeachers.length;

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage message="Teachers not Found" />;
  }
  return (
    <>
      <Header />
      <div className={s.container}>
        <TeacherFilters changeFilters={changeFilters} />
        {visibleTeachers.length === 0 && (
          <ErrorMessage message={"Not Found Teacher"} />
        )}
        <TeacherList
          filters={filters}
          hasMore={hasMore}
          teachers={visibleTeachers}
          onLoadMore={handleLoadMore}
        />
      </div>
    </>
  );
};

export default Teachers;
