import React from 'react';

const MovieInfo = ({movie}) => {
    const { original_title, release_date,vote_average, poster_path} = movie;

    return (
        <div>
            <div>Назва {original_title}</div>
            <div>Дата виходу {release_date}</div>
            <div>Рейтинг {vote_average}</div>
            <img src = {poster_path} alt = {original_title} />
        </div>
    );
};

export default MovieInfo;