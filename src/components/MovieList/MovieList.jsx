import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { PATH_TO_IMAGES } from "../../services/requestMovies";
import css from "./MovieList.module.css";

export const MovieList = ({ arrayOfMovies }) => {
  const location = useLocation();

  return (
    <ul className={css.imageGallery}>
      {arrayOfMovies.map(movie => {
        return (
          <li key={movie.id} className={css.itemWrapper}>
            <NavLink
              className={css.link}
              to={`/movies/${movie.id}`}
              state={{ from: location }}>
              <img className={css.movieImage} src={PATH_TO_IMAGES + movie.poster_path} alt="movie.original_title" />
              <p className={css.movieTitle}>{movie.original_title}</p>
            </NavLink>
          </li>
        );
      }
      )};
    </ul>
  );
};

MovieList.propTypes = {
  arrayOfMovies: PropTypes.array.isRequired,
};

