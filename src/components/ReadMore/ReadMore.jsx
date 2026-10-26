import s from "./ReadMore.module.css";

const ReadMore = ({ onChangeVisible, isVisible }) => {
  return (
    <button
      onClick={() => {
        onChangeVisible((prev) => !prev);
      }}
      className={s.btnLoadMore}
    >
      {!isVisible ? "Read more" : "Read less"}
    </button>
  );
};

export default ReadMore;
