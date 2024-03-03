import React from 'react';
import css from "./MainLayout.module.css"
import Header from "../components/header/Header";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div className={css.front}>
        <div className={css.container}>
            <Header/>
            <Outlet/>
        </div>
        </div>
    );
};

export default MainLayout;