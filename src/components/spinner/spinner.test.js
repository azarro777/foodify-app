import React from 'react';
import Spinner from './spinner';
import { shallow } from 'enzyme';

describe('Testing <Spinner/> component', () => {
  it('Spinner have rendered correctly', () => {
    const spinner = shallow(<Spinner />);
    expect(spinner).toMatchSnapshot();
  });
});
