import React, {useEffect, useState} from 'react';
import css from "./MoviesListCards.module.css"
import {useLocation} from "react-router-dom";
import movieService from "../../components/service/movieService";
import MovieInfo from "../../components/movieInfoContainer/MovieInfo";

const MoviesListCards = () => {
    const [movie, setMovie] = useState();
    const { state: { id } } = useLocation();

    useEffect(() => {
        if(id){
            movieService.getById(id).then(({data}) => setMovie(data))
        }
    }, [id]);

    return (
        <div className={css.detal}>
            {movie && <MovieInfo movie = {movie}/>}
        </div>
    );
};

export default MoviesListCards;