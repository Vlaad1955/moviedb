import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "../genreContainer/Genre.module.css"

const Movie = ({movie}) => {
    const { title, vote_average, poster_path, id} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.movie}>
            <div>Назва {title}</div>
            <div>Рейтінг {vote_average}</div>
            <img src = {poster_path} alt = {title} />
            <button onClick={() => navigate("/mv", { state: {id} })}>Детальніше</button>
        </div>
    );
};

export default Movie;