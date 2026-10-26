import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <>
      <button onClick={onLoadMore} className={s.btnMore}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
