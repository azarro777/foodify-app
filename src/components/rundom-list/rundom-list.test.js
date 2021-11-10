import React from 'react';
import RundomList from './rundom-list';
import { shallow } from 'enzyme';

describe('Testing <RundomList/>', () => {
  it('RundomList have rendered correctly', () => {
    const appHeader = shallow(<RundomList />);
    expect(appHeader).toMatchSnapshot();
  });
});
