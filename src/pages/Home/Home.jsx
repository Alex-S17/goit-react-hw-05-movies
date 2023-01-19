import { useState, useEffect } from "react";
import { requestTrandingMovies } from "../../services/requestMovies";
import { Dna } from 'react-loader-spinner';
import { MovieList } from "../../components/MovieList/MovieList";
import css from "./Home.module.css";

function Home() {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestTrandingMovies()
      .then(response => {
        setTrandingMovies(response.results)
        setLoading(false);
      }).finally(setLoading(true));      
  }, []);

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
      <div>
        <h1 className={css.trandingTitle}>Trending today</h1>
        <MovieList arrayOfMovies={trandingMovies} />
      </div>
    </>
  );
};
export default Home;

