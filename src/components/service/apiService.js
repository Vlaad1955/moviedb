import axios from "axios";
import {BaseURL} from "../../constants/urls"

const apiService = axios.create({baseURL: BaseURL});
export {
    apiService
};