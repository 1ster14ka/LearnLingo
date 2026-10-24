import TeacherCard from "../TeacherCard/TeacherCard";

const TeacherList = ({ teachers }) => {
  return (
    <ul>
      {teachers.map((teacher) => (
        <TeacherCard info={teacher} key={teacher.id} />
      ))}
    </ul>
  );
};

export default TeacherList;
