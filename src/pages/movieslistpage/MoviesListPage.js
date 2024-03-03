import React from 'react';
import Movies from "../../components/movieContainer/Movies";
import css  from "./MoviesListPage.module.css"

const MoviesListPage = () => {
    return (
        <div className={css.maincontent}>
            <Movies/>
        </div>
    );
};

export default MoviesListPage;