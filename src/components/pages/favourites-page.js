import React from 'react';
import FavouriteListItem from '../favourite-list-item/favourite-list-item';
import { AppHeader } from '../app-header/app-header';
import { useSelector } from 'react-redux';

const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites);
  const checkFavourites = favourites === undefined ? [] : favourites;

  return (
    <>
      <AppHeader visible={'button__container'} />
      <ul className='menu__list'>
        {checkFavourites.map((menuItem) => {
          return (
            <FavouriteListItem menuItem={menuItem} key={menuItem.idMeal} />
          );
        })}
      </ul>
    </>
  );
};

export default FavouritesPage;
