import React from 'react';
import MoviesListPage from "./pages/movieslistpage/MoviesListPage";

const Router =
    createBrowserRouter([
    {
        path: ``, element:<MainLayout/>, children: [
            {
                path: `albums`, element: <MoviesListPage/>
            },
        ]
    }
]);

export default Router;