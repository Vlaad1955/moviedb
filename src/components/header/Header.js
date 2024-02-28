import React from 'react';
import  css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.logo}>Vlad film</div>
            <div className={css.buttons}>
                <button className={css.button}>Кнопка 1</button>
                <button className={css.button}>Кнопка 2</button>
                <button className={css.button}>Кнопка 3</button>
            </div>
        </div>
    );
};

export default Header;