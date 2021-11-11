import React from 'react';
import Error from './error';
import { shallow } from 'enzyme';

describe('Testing <Error/> component', () => {
  const error = shallow(<Error />);
  it('Error have rendered correctly', () => {
    expect(error).toMatchSnapshot();
  });
});
