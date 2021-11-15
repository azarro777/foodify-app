import React, { useEffect } from 'react';
import RundomListItem from '../rundom-list-item/rundom-list-item';
import { useSelector, useDispatch } from 'react-redux';
import FoodifyApi from '../../api/foodify-api';
import { menuLoader, menuRequested, addToFavourites } from '../../actions';
import Spinner from '../spinner/spinner';
import './rundom-list.scss';

const RundomList = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const menuItems = menu === undefined ? [] : menu;

  const loading = useSelector((state) => state.loading);

  const getData = () => {
    FoodifyApi().then((result) => dispatch(menuLoader(result.meals)));
  };

  useEffect(() => {
    dispatch(menuRequested());
    getData();
    // eslint-disable-next-line
  }, []);

  const addToFav = () => {
    dispatch(addToFavourites(menuItems));
    getData();
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <ul className='menu__list'>
      {menuItems.map((menuItem) => {
        return (
          <RundomListItem
            menuItem={menuItem}
            key={menuItem.idMeal}
            refresh={getData}
            addToFav={addToFav}
          />
        );
      })}
    </ul>
  );
};

export default RundomList;
