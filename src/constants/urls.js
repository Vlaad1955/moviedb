const BaseURL = "https://api.themoviedb.org/3/discover/movie";
const BaseURLId = "https://api.themoviedb.org/3/movie";
const API_KEY = "api_key=a62bb58a79ca793796f9e659efe25bde";
const IMG_URL = "https://image.tmdb.org/t/p/w200";

const urls = {
  movie: {
    base: `${BaseURL}?${API_KEY}`,
    ById: (id) => `${BaseURLId}/${id}?${API_KEY}`,
  },
};

export { BaseURL, IMG_URL, urls };
