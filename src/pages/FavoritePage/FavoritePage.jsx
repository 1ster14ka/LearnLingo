import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";

import TeacherList from "../../components/TeacherList/TeacherList";
import {
  favoriteTeachersSelect,
  isLoadingSelect,
} from "../../components/redux/Teachers/selectors";

import s from "./FavoritePage.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const FavoritePage = () => {
  const isLoading = useSelector(isLoadingSelect);

  const favoritesTeachers = useSelector(favoriteTeachersSelect);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <div className={s.container}>
        {favoritesTeachers.length > 0 ? (
          <TeacherList teachers={favoritesTeachers} />
        ) : (
          <ErrorMessage message="No Favorite Teachers Found" />
        )}
      </div>
    </>
  );
};

export default FavoritePage;
