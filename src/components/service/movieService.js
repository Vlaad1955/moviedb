import { apiService } from "./apiService";
import { urls } from "../../constants/urls";

const movieService = {
    getAll: (page) => apiService.get(`${urls.movie.base}&page=${page}`),
    getById:(id) => apiService.get(urls.movie.ById(id))
};

export default movieService;