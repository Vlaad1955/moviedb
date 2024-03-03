import React, { useEffect, useState } from 'react';
import movieService from '../service/movieService';
import Movie from './Movie';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = (page) => {
    movieService.getAll(page).then(({ data }) => setMovies(data.results));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  return (
      <div>
        <div>
          <button className={css.button} onClick={prevPage} disabled={currentPage === 1}>
            Минула
          </button>
          <button className={css.button} onClick={nextPage}>
            Наступна
          </button>
        </div>
        <div className={css.page}>
          {movies.map((movie) => (
              <Movie movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
  );
};

export default Movies;
