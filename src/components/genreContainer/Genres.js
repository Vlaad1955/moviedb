import React, { useEffect, useState } from 'react';
import movieService from "../service/movieService";
import css from "../movieContainer/Movies.module.css";
import Genre from "./Genre";
import { useParams } from 'react-router-dom';
import { moviesbygenreService } from "../service/moviesbygenreService";

const Genres = () => {
    const { idgenre } = useParams();
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

    // Фільтрація фільмів за жанром
    const moviesByGenre = moviesbygenreService({ movies, idgenre });

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
                {moviesByGenre.map((movie) => (
                    <Genre movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
};

export default Genres;