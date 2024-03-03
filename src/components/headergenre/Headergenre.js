import React from 'react';
import  css from "./HeaderGenre.module.css"

const Headergenre = () => {
    return (
        <div className={css.header}>
            <div className={css.logo}>Жанри</div>
            <div className={css.buttons}>
                <button className={css.button} onClick={() => navigate("/gen", { state: {id} })}>Детальніше</button>
                <button className={css.button} onClick={() => navigate("/gen", { state: {id} })}>Детальніше</button>
                <button className={css.button} onClick={() => navigate("/gen", { state: {id} })}>Детальніше</button>
                <button className={css.button} onClick={() => navigate("/gen", { state: {id} })}>Детальніше</button>
                <button className={css.button} onClick={() => navigate("/gen", { state: {id} })}>Детальніше</button>
                <button className={css.button} onClick={() => navigate("/gen", { state: {id} })}>Детальніше</button>
            </div>
        </div>
    );
};

export default Headergenre;