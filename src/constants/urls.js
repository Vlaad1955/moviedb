const BaseURL = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = 'api_key=a62bb58a79ca793796f9e659efe25bde';

const urls = {
    movie:{
        base:`${BaseURL}?${API_KEY}`,
        ById: (id) => `${BaseURL}/${id}?${API_KEY}`,
    }
};

export {
    BaseURL,
    urls
};