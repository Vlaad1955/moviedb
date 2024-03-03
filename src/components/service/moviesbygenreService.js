import React from 'react';


const moviesbygenreService = ({ movies, genre }) => { const filteredMovies = movies.filter(movie => movie.genre_ids === genre);}

export {
    moviesbygenreService
};