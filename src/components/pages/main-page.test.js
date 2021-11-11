import React from 'react';
import MainPage from './main-page';
import { shallow } from 'enzyme';

describe('Testing <MainPage/> component', () => {
  const main = shallow(<MainPage />);
  it('MainPage have rendered correctly', () => {
    expect(main).toMatchSnapshot();
  });
});
