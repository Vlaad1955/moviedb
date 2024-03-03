import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMG_URL } from '../../constants/urls';
import Rating from '../service/renderStarsService';
import css from './Movie.module.css';
import {useTheme} from "../../context/Context";

const Movie = ({ movie }) => {
  const { darkTheme } = useTheme();
  const { title, vote_average, poster_path, id, release_date } = movie;
  const navigate = useNavigate();

  const handleInfo = () => {
    navigate('/mv', { state: { id } });
  };

  return (
      <div className={`${css.cardstyle} ${darkTheme ? css.active : ""}`} >
        <div onClick={handleInfo}>
          <div className={css.content}>
            <img className={css.poster} src={`${IMG_URL}/${poster_path}`} alt={title} />
            <h1> Назва {title}</h1>
            <p>{release_date}</p>
            <div>
              <Rating rating={vote_average} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Movie;
