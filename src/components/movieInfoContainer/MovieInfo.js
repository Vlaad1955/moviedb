import React from "react";
import { IMG_URL } from "../../constants/urls";
import css from "./MovieInfo.module.css";

const MovieInfo = ({ movie }) => {
    const { original_title, release_date, vote_average, poster_path, overview } = movie;

    return (
        <div className={css.movieInfo}>
            <div>
            <div className={css.title}>Назва: {original_title}</div>
            <div className={css.releaseDate}>Дата виходу: {release_date}</div>
            <div>{overview}</div>
            <div className={css.rating}>Рейтинг: {vote_average}</div>
            </div>
            <img className={css.poster} src={`${IMG_URL}/${poster_path}`} alt={original_title} />
        </div>
    );
};

export default MovieInfo;
