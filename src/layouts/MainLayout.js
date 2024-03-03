import React, { useState } from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import css from './MainLayout.module.css';

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