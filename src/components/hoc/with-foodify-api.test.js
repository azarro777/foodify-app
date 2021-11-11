import React from 'react';
import WithFoodifyApi from './with-foodify-api';
import { shallow } from 'enzyme';

describe('Testing <WithFoodifyApi/> component', () => {
  it('WithFoodifyApi have rendered correctly', () => {
    const foodify = shallow(<WithFoodifyApi />);
    expect(foodify).toMatchSnapshot();
  });
});
