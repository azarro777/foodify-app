import React from 'react';
import FavouritesPage from './favourites-page';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Testing <FavouritesPage/> component', () => {
  const favourite = shallow(<FavouritesPage />);
  it('FavouritesPage have rendered correctly', () => {
    expect(favourite).toMatchSnapshot();
  });
});
