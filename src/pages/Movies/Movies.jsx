import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dna } from 'react-loader-spinner';
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { requestMovieByName } from "../../services/requestMovies";
import { useSearchParams } from 'react-router-dom';
import { MovieList } from "../../components/MovieList/MovieList";
import css from "./Movies.module.css";

function  Movies() {
  const [foundMovies, setFoundMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromURL = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryFromURL === '') {
      return;
    }
    setLoading(true);
    requestMovieByName(queryFromURL)
      .then(response => {
        setFoundMovies(response.results)
        if (response.total_results === 0) {
          return toast.error("No images found. Input another query", {
            position: "top-left",
            autoClose: 3000,
            theme: "colored",
          });
        };
      });
    setLoading(false);
  }, [queryFromURL]);

  const handleSubmit = (inputedQuery) => {
    if (inputedQuery === '') {
      return toast.info("Please, enter the query", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    };
    setSearchParams({ query: inputedQuery });
  };

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

      <h1 className={css.searchTitle}>Search your favorite movies here!</h1>
      <Searchbar onSubmit={handleSubmit} />
      {foundMovies.length > 0 && <MovieList arrayOfMovies={foundMovies} />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </>
  );
};
export default Movies;

