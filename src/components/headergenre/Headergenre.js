import React from 'react';
import css from "../header/Header.module.css";
import {NavLink} from "react-router-dom";

const Headergenre = () => {

    return (
        <div className={css.header}>
            <div className={css.logo}>Жанри</div>
            <div className={css.buttons}>
                <NavLink to="/gen/12" className={css.button} >
                    Пригоди
                </NavLink>
                    <NavLink to={`/gen/35`} className={css.button} >
                        Комедії
                    </NavLink>
                    <NavLink to={`/gen/18`} className={css.button} >
                        Драми
                    </NavLink>
                    <NavLink to={`/gen/27`} className={css.button} >
                        Жахи
                    </NavLink>
                <NavLink to={`/gen/16`} className={css.button} >
                    Анімація
                </NavLink>
                <NavLink to={`/gen/14`} className={css.button} >
                    Фантастика
                </NavLink>
                </div>
        </div>
    );
};

export default Headergenre;