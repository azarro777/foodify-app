import React from 'react';
import FavouriteListItem from './favourite-list-item';
import { shallow } from 'enzyme';

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
