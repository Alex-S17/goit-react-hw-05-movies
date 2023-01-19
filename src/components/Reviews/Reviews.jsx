import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dna } from 'react-loader-spinner';
import { requestMovieReview } from "../../services/requestMovies";
import { ReviewInfo } from "../ReviewInfo/ReviewInfo";
import css from "./Reviews.module.css";

const Reviews = () => {
  const [reviewInfo, setReviewInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    requestMovieReview(movieId)
      .then(response => setReviewInfo(response.results));
    setLoading(false);
  }, [movieId]);

  if (!reviewInfo) return;

  return (
    <div>
      {loading && (<Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />)}

      <h1 className={css.reviewTitle}>REVIEWS</h1>
      {reviewInfo.length > 0
        ? (<ul>
          {reviewInfo.map(review => (
            <ReviewInfo
              key={review.id}
              author={review.author}
              content={review.content}
            />
          ))}
        </ul>)
        : (<p className={css.ifNoReview}>We don't have any reviews for this movie</p>)
      }
    </div>
  );
};

export default Reviews;

