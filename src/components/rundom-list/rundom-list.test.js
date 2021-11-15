import React from 'react';
import RundomList from './rundom-list';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  menuItems: [{}],
  useDispatch: () => mockDispatch
}));

describe('props', () => {
  const props = {
    menuItems: [{}]
  };

  describe('Testing <RundomList/>', () => {
    it('RundomList have rendered correctly', () => {
      const appHeader = shallow(<RundomList {...props} />);
      expect(appHeader).toMatchSnapshot();
    });
  });
});
