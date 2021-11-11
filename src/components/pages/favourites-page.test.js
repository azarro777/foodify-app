import React from 'react';
import FavouritesPage from './favourites-page';
import { shallow } from 'enzyme';

describe('Testing <FavouritesPage/> component', () => {
  const favourite = shallow(<FavouritesPage />);
  it('FavouritesPage have rendered correctly', () => {
    expect(favourite).toMatchSnapshot();
  });
});
