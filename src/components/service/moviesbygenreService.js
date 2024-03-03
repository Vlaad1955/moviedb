export const moviesbygenreService = ({ movies, idgenre }) => {
    const filteredMovies = movies.filter(movie => movie.genre_ids.includes(parseInt(idgenre)));
    return filteredMovies;
};

