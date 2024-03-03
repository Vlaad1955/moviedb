import React from 'react';
import  css from "./Header.module.css";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.logo}>Vlad film</div>
            <div className={css.buttons}>
                <NavLink to={`/mvs`} className={css.button}>Каталог</NavLink>
                <NavLink to={`/genre`} className={css.button}>Жанр</NavLink>
            </div>
            <div className={css.usericon}>
                <img className={css.foto} src="https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg" alt="User Icon"/>
                <div className={css.username}>user19177</div>
            </div>
        </div>
    );
};

export default Header;