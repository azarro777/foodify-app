import React from 'react';
import ErrorBoundry from './error-boundry';
import { shallow } from 'enzyme';

describe('Testing <ErrorBoundry/> component', () => {
  const errorBoundary = shallow(<ErrorBoundry />);
  it('ErrorBoundry have rendered correctly', () => {
    expect(errorBoundary).toMatchSnapshot();
  });
  it('ErrorBoundary state is folse', () => {
    expect(errorBoundary.state().error).toBeFalse();
  });
});
