import PropTypes from "prop-types";
import { PATH_TO_IMAGES } from "../../services/requestMovies";
import css from "./CastInfo.module.css";
import actorPlaceholder from "../../images/actor-placeholder.jpg";

export const CastInfo = ({ name, character, profile_path }) => {
  let pathToPhoto = null;
  if (!profile_path) {
    pathToPhoto = actorPlaceholder;
  }
  else {
    pathToPhoto = PATH_TO_IMAGES + profile_path;
  };
 
  return (
    <li className={css.actorItem}>
      <img className={css.actorImage} src={pathToPhoto} alt={name} width={150} />
      <p className={css.actorName}>{name}</p>
      <p className={css.character}>Character: {character}</p>
    </li>
  );
};

CastInfo.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
};