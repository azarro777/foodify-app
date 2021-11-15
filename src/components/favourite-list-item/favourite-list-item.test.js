import React from 'react';
import FavouriteListItem from './favourite-list-item';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('all props', () => {
  const props = {
    menuItem: []
  };

  describe('Testing <FavouriteListItem/>', () => {
    it('FavouriteListItem have rendered correctly', () => {
      const favourite = shallow(<FavouriteListItem {...props} />);
      expect(favourite).toMatchSnapshot();
    });
  });
});
