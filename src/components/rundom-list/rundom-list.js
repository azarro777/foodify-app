import React, { useEffect } from 'react';
import RundomListItem from '../rundom-list-item/rundom-list-item';
import { connect } from 'react-redux';
import WithFoodifyApi from '../hoc/with-foodify-api';
import { menuLoader, menuRequested, addToFavourites } from '../../actions';
import Spinner from '../spinner/spinner';
import './rundom-list.scss';

const RundomList = (props) => {
  const { FoodifyApi, menuItems, loading } = props;

  const getData = () => {
    FoodifyApi().then((result) => props.menuLoader(result.meals));
  };

  useEffect(() => {
    props.menuRequested();
    getData();
    // eslint-disable-next-line
  }, []);

  const addToFav = () => {
    props.addToFavourites(menuItems);
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

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    favourites: state.favourites,
    loading: state.loading
  };
};

const mapDispatchToProps = {
  menuLoader,
  menuRequested,
  addToFavourites
};

export default WithFoodifyApi()(
  connect(mapStateToProps, mapDispatchToProps)(RundomList)
);
