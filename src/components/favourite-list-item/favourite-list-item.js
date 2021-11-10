import React from 'react';
import classes from './favourite-list-item.module.scss';

const FavouriteListItem = ({ menuItem, refresh, addToFav }) => {
  const { strInstructions, strMeal, strMealThumb } = menuItem;
  return (
    <li className={classes.dish__item}>
      <img className={classes.dish__img} src={strMealThumb} alt={strMeal}></img>
      <div className={classes.text__container}>
        <h3 className={classes.dish__title}>{strMeal}</h3>

        <p className={classes.dish__recipe}>{strInstructions}</p>
      </div>
    </li>
  );
};

export default FavouriteListItem;
