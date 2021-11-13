import React from 'react';
import { AppHeader } from './app-header';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Testing <AppHeader/>', () => {
  it('AppHeader have rendered correctly', () => {
    const appHeader = shallow(
      <Router>
        <AppHeader />
      </Router>
    );
    expect(appHeader).toMatchSnapshot();
  });
});
