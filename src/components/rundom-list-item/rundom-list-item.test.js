import React from 'react';
import RundomListItem from './rundom-list-item';
import { shallow } from 'enzyme';

describe('all props', () => {
  const props = {
    menuItem: [],
    refresh: function () {},
    addToFav: function () {}
  };

  describe('Testing <RundomListItem/>', () => {
    it('RundomListItem have rendered correctly', () => {
      const rundomListItem = shallow(<RundomListItem {...props} />);
      expect(rundomListItem).toMatchSnapshot();
    });
  });
});
