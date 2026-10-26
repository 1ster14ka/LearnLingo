import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import TeacherCard from "../TeacherCard/TeacherCard";

import s from "./TeacherList.module.css";

const TeacherList = ({ teachers, onLoadMore, hasMore, filters }) => {
  return (
    <>
      <ul className={s.list}>
        {teachers.map((teacher) => (
          <TeacherCard info={teacher} key={teacher.id} filters={filters} />
        ))}
      </ul>
      {hasMore && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </>
  );
};

export default TeacherList;
