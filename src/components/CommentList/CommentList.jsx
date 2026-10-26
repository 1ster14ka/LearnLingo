import { FaCircleUser } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

import s from "./CommentList.module.css";

const CommentList = ({ comments, experience }) => {
  return (
    <div>
      <p className={s.experience}>{experience}</p>

      <ul className={s.commentList}>
        {comments.map(({ comment, reviewer_name, reviewer_rating }, ind) => (
          <li key={ind} className={s.commentItem}>
            <div className={s.wrapperUserInfo}>
              <FaCircleUser className={s.iconUser} />
              <div className={s.wrapperReviewer}>
                <span className={s.reviewerName}>{reviewer_name}</span>
                <span className={s.reviewerRating}>
                  <IoMdStar className={s.iconStar} />
                  {reviewer_rating}
                </span>
              </div>
            </div>
            <p className={s.comment}>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
