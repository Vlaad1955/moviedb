import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import movieService from "../service/movieService";
import moviesbygenreService from "../service/moviesbygenreService"
import Movie from "../movieContainer/Movie";
import Genre from "./Genre";

const Genres = () => {

    const [movies, setMovies] = useState([])
    const { state: {genre_id} } = useLocation();
    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data.results))
    }, []);
    const moviesgenre = moviesbygenreService({movies,genre_id});

    return (
        <div>
            {moviesgenre.map(movie => <Genre key={movie.id} movie = {movie} />)}
        </div>
    );
};

export default Genres;