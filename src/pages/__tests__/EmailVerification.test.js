import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,mount, configure } from 'enzyme';
import EmailVerification from '../EmailVerification';
const mockFn = jest.fn();

// configure({ adapter: new Adapter() });

const componentInput = mount(<EmailVerification />);
describe('Login', () => {

//   it('renders a email input', () => {
//     expect(componentInput.find('#email').length).toEqual(1);
//   })

//   it('renders a password input', () => {
   
//     expect(componentInput.find('#password').length).toEqual(1);
//   });

  it('should render correctly in "debug" mode', () => {
    // const component = mount(<Login debug />);
    expect(componentInput).toMatchSnapshot();
  });
});