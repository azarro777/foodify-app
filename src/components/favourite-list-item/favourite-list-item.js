import React from 'react';
import classes from './favourite-list-item.module.scss';
import { useDispatch } from 'react-redux';
import { removeFavourite } from '../../actions/index';

const FavouriteListItem = ({ menuItem }) => {
  const { strInstructions, strMeal, strMealThumb, idMeal } = menuItem;

  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFavourite(idMeal));
  };

  return (
    <li className={classes.dish__item}>
      <img className={classes.dish__img} src={strMealThumb} alt={strMeal}></img>
      <div className={classes.text__container}>
        <h3 className={classes.dish__title}>{strMeal}</h3>

        <p className={classes.dish__recipe}>{strInstructions}</p>
      </div>
      <div className={classes.dish__container}>
        <button onClick={removeItem} className={classes.dish__button}>
          delete
        </button>
      </div>
    </li>
  );
};

export default FavouriteListItem;
