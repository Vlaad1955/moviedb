import React from 'react';
import Headergenre from "../../components/headergenre/Headergenre";
import {Outlet} from "react-router-dom";

const MoviesListGenres = () => {
    return (
        <div>
            <Headergenre/>
            <Outlet/>
        </div>
    );
};

export default MoviesListGenres;