import React, { useEffect, useState } from 'react';
import movieService from "../service/movieService";
import Movie from "./Movie";

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const fetchMovies = (page) => {
        movieService.getAll(page).then(({ data }) => setMovies(data.results));
    };

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div>
            {movies.map(movie => <Movie movie = {movie} />)}
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>Минула</button>
                <button onClick={nextPage}>Наступна</button>
            </div>
        </div>
    );
};

export default Movies;