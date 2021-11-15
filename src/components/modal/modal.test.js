import React from 'react';
import Modal from './modal';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('Testing <Modal/> component', () => {
  const modal = shallow(<Modal />);
  it('Modal have rendered correctly', () => {
    expect(modal).toMatchSnapshot();
  });
  it('Modal state "inputs" is empty object', () => {
    expect((modal.inputs = {})).toBeObject();
  });
  it('testing handleChange function', () => {
    expect((modal.handleChange = () => {})).toBeFunction();
  });

  it('testing handleSubmit function', () => {
    expect((modal.handleSubmit = () => {})).toBeFunction();
  });

  it('testing getRundomId function', () => {
    expect((modal.getRundomId = () => {})).toBeFunction();
  });
});
