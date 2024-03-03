import React from 'react';
import MoviesListPage from "./pages/movieslistpage/MoviesListPage";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesListCards from "./pages/movieslistcards/MoviesListCards";
import GenrePage from "./pages/genre/GenrePage";
import Genres from "./components/genreContainer/Genres";


const router =
    createBrowserRouter([
    {
        path: ``, element:<MainLayout/>, children: [
            {
                path: "mvs", element: <MoviesListPage/>
            },
            {
                path: "mv", element:<MoviesListCards/>
            },
            {
                path: "genre", element: <GenrePage/>
            },
        ]
    }
]);

export default router;