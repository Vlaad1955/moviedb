import React from 'react';
import css from "./MainLayout.module.css"
import Header from "../components/header/Header";
import MoviesListPage from "../pages/movieslistpage/MoviesListPage";


const MainLayout = () => {
    return (
        <div className={css.front}>
        <div className={css.container}>
            <Header></Header>
            <MoviesListPage></MoviesListPage>
        </div>
        </div>
    );
};

export default MainLayout;