import React from 'react';
import App from './app';
import { shallow } from 'enzyme';

describe('Testing <App/> component', () => {
  const app = shallow(<App />);
  it('App have rendered correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
