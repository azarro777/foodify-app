import React from 'react';
import FavouriteListItem from '../favourite-list-item/favourite-list-item';
import { connect } from 'react-redux';
import WithFoodifyApi from '../hoc/with-foodify-api';
import { AppHeader } from '../app-header/app-header';

const FavouritesPage = (props) => {
  const { favourites } = props;

  return (
    <>
      <AppHeader visible={'button__container'} />
      <ul className='menu__list'>
        {favourites.map((menuItem) => {
          return (
            <FavouriteListItem menuItem={menuItem} key={menuItem.idMeal} />
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites
  };
};

export default WithFoodifyApi()(connect(mapStateToProps)(FavouritesPage));
