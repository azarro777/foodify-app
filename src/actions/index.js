export const menuLoader = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  };
};

export const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  };
};

export const addToFavourites = (item) => {
  return {
    type: 'ADD_FAVOURITE',
    payload: item
  };
};
