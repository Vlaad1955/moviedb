import React, { useState } from "react";
import css from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

const Header = ({onToggleActive}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={`${css.header} ${isActive ? css.active : ""}`}>
      <div className={css.logo}>Vlad film</div>
      <div className={css.buttons}>
        <NavLink to={`/mvs`}  className={css.button}>
          Каталог
        </NavLink>
          <NavLink to={`/gen`}  className={css.button}>
              Жанри
          </NavLink>
          <button className={css.button} onClick={toggleActive}>Змінити тему</button>
      </div>
      <div className={css.usericon}>
        <img
          className={css.foto}
          src="https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg"
          alt="User Icon"
        />
        <div className={css.username}>user19177</div>
      </div>
    </div>
  );
};

export default Header;
