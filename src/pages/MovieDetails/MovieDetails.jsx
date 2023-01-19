import { Link, Outlet, useParams } from "react-router-dom";
import { requestMoviesByID } from "../../services/requestMovies";
import { useState, useEffect } from "react";
import { Dna } from 'react-loader-spinner';
import { PATH_TO_IMAGES } from "../../services/requestMovies";
import { NavLink, useLocation } from "react-router-dom";
import { Suspense } from "react";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    requestMoviesByID(movieId)
      .then(response => setMovieInfo(response));
    setLoading(false);
  }, [movieId]);

  const {
    id,
    original_title,
    vote_average,
    overview,
    genres,
    poster_path,
  } = movieInfo;
  
  if (!original_title) return;

  let movieGenres = genres.map(genre => genre.name).join(', ');
  let voteAverage = vote_average.toFixed(1) * 10;

  const backHref = location.state?.from ?? "/";
 
  return (
    <>
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
      
      <Link className={css.backButton} to={backHref}>Back</Link>      
      <div className={css.movieInfoWrapper}>
        <h1 className={css.titleHeader}>{original_title}</h1>
        <div className={css.innerBlockWrapper}>
          <img src={PATH_TO_IMAGES + poster_path} alt={original_title} width={300} />
          <div className={css.textInfoWrapper}>
            <p className={`${css.text} ${css.textScore}`}>User score: {voteAverage}%</p>
            <h2 className={css.overviewHeader}>Overview</h2>
            <p className={css.text}>{overview}</p>
            <h3 className={css.genresHeader}>Genres</h3>
            <p className={`${css.text} ${css.textGenres}`}>{movieGenres}</p>
            <h2 className={css.addInfoHeader}>Additional information</h2>
            <nav className={css.navigation}>
              <NavLink
                className={css.infoLink}
                to={`/movies/${id}/cast`}
                state={{ from: location.state.from }}
              >
                Cast
              </NavLink>
              <NavLink
                className={css.infoLink}
                to={`/movies/${id}/reviews`}
                state={{ from: location.state.from }}
              >
                Reviews
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;

