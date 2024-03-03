import React from 'react';
import MoviesListPage from "./pages/movieslistpage/MoviesListPage";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MoviesListCards from "./pages/movieslistcards/MoviesListCards";
import MoviesListGenres from "./pages/movielistgenres/MoviesListGenres";
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
                path:"gen", element:<MoviesListGenres/>, children:[
                    {
                        path:"/gen/:idgenre", element:<Genres/>
                    }
                ]
            },
        ]
    }
]);

export default router;