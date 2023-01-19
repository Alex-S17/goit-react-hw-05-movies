import PropTypes from "prop-types";
import css from "./ReviewInfo.module.css";

export const ReviewInfo = ({ author, content }) => {
  return (
    <li className={css.reviewItem}>
      <p className={css.reviewAuthor}>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

ReviewInfo.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};