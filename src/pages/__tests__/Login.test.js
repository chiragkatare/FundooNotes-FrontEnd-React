import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Login from '../Login';
const mockFn = jest.fn();
import Button from '@material-ui/core/Button'

// configure({ adapter: new Adapter() });

describe('Login', () => {

  it('renders a email input', () => {
    const componentInput = shallow(<Login />);
    expect(componentInput.find('#email').length).toEqual(1);
  })

  it('renders a password input', () => {
    const componentInput = shallow(<Login />);
    expect(componentInput.find('#password').length).toEqual(1);
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Login debug />);
    // const component = mount(<Login debug />);
    expect(component).toMatchSnapshot();
  });



  it('should not login with empty email', () => {
    const component = shallow(<Login />);
    const loginButton = component.find('#loginbtn')
    loginButton.simulate('click');
    const errordiv = component.find('div.error').at(0)
    const text = errordiv.text()
    expect(text).toEqual('Email is required')
  });


  it('should not login with empty password', () => {
    const component = shallow(<Login />);
    const loginButton = component.find('#loginbtn')
    loginButton.simulate('click');
    const errordiv = component.find('div.error').at(1)
    const text = errordiv.text()
    expect(text).toEqual('Password cannot be empty')

  });

  it('email input respond to change event and change state of the Login Component', () => {

    const componentInput = shallow(<Login />);
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

  const componentInput = shallow(<Login />);
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