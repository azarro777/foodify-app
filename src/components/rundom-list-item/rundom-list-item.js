import React from 'react';
import classes from './rundom-list-item.module.scss';
import placeholder from '../modal/placeholder.png';

const RundomListItem = ({ menuItem, refresh, addToFav }) => {
  const { strInstructions, strMeal, strMealThumb } = menuItem;
  return (
    <li className={classes.dish__item}>
      <img
        className={classes.dish__img}
        src={strMealThumb === '' ? placeholder : strMealThumb}
        alt={strMeal}
      ></img>
      <div className={classes.text__container}>
        <h3 className={classes.dish__title}>{strMeal}</h3>

        <p className={classes.dish__recipe}>{strInstructions}</p>
      </div>

      <div className={classes.btn__container}>
        <button className={classes.dish__btn} onClick={refresh}>
          Skip
        </button>
        <button className={classes.dish__btn} onClick={addToFav}>
          Like
        </button>
      </div>
    </li>
  );
};

export default RundomListItem;
