import React from 'react';
import { AppHeader } from './app-header';
import { shallow } from 'enzyme';

describe('Testing <AppHeader/>', () => {
  it('AppHeader have rendered correctly', () => {
    const appHeader = shallow(<AppHeader />);
    expect(appHeader).toMatchSnapshot();
  });
});
