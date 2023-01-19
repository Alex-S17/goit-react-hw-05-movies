import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Dna } from 'react-loader-spinner';
import { requestCastByID } from "../../services/requestMovies";
import { CastInfo } from "../CastInfo/CastInfo";
import css from "./Cast.module.css";

const Cast = () => {
  const [castInfo, setCastInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    requestCastByID(movieId)
      .then(response => setCastInfo(response.cast));
    setLoading(false);
  }, [movieId]);

  if (!castInfo) return;

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

      <h1 className={css.castTitle}>CAST</h1>      
      {castInfo.length > 0
        ? (<ul className={css.castWrapper}>
          {castInfo.map(cast => {
            let { id, name, character, profile_path } = cast;
            if (!profile_path) profile_path = '';
            return (
              <CastInfo
                key={id}
                name={name}
                character={character}
                profile_path={profile_path}
              />
            );
          })
          }
        </ul>)
        : (<p className={css.ifNoCast}>We don't have any cast information for this movie</p>)
      }
    </div>
  );
};

export default Cast;


