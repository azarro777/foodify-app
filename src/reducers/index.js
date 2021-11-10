const initialState = {
  menu: [],
  favourites: [],
  loading: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED':
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case 'MENU_REQUESTED':
      return {
        ...state,
        menu: state.menu,
        loading: true
      };
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.concat(action.payload)
      };
    default:
      return state;
  }
};
