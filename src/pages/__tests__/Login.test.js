import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,mount, configure } from 'enzyme';
import Login from '../Login';
const mockFn = jest.fn();
import Button from '@material-ui/core/Button'

// configure({ adapter: new Adapter() });

const componentInput = shallow(<Login />);
describe('Login', () => {

  it('renders a email input', () => {
    expect(componentInput.find('#email').length).toEqual(1);
  })

  it('renders a password input', () => {
   
    expect(componentInput.find('#password').length).toEqual(1);
  });

  it('should render correctly in "debug" mode', () => {
    // const component = mount(<Login debug />);
    expect(componentInput).toMatchSnapshot();
  });



  it('should not login with empty email', () => {
    const loginButton = componentInput.find('#loginbtn')
    loginButton.simulate('click');
    const errordiv = componentInput.find('div.error').at(0)
    const text = errordiv.text()
    expect(text).toEqual('Email is required')
  });


  it('should not login with empty password', () => {
    const loginButton = componentInput.find('#loginbtn')
    loginButton.simulate('click');
    const errordiv = componentInput.find('div.error').at(1)
    const text = errordiv.text()
    expect(text).toEqual('Password cannot be empty')

  });

  it('email input respond to change event and change state of the Login Component', () => {

    const emailTest = componentInput.find('#email');

    emailTest.props().onChange({
        target: {
            name: 'email',
            value: 'abcd@gmail.com'
        }
    });

    expect(componentInput.state('email')).toEqual('abcd@gmail.com');
})

it('password input Should respond to change event and change state of the Login Component', () => {

  const emailTest = componentInput.find('#password');

  emailTest.props().onChange({
      target: {
          name: 'password',
          value: 'abcd@123'
      }
  });

  expect(componentInput.state('password')).toEqual('abcd@123');
})

describe('Test Button component', () => {
  it('Test click event', () => {
      const mockCallBack = jest.fn();
      const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
      button.simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});


});