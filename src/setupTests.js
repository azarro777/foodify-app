import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import * as matchers from 'jest-extended';
expect.extend(matchers);

Enzyme.configure({ adapter: new Adapter() });

const config = {
  jest: {
    setupFilesAfterEnv: ['./testSetup.js']
  }
};

export default config;
