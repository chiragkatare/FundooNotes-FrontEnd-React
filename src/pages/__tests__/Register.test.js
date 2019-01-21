import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Register from '../Register';

// configure({adapter: new Adapter()});

describe('Register', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Register debug />);
  
    expect(component).toMatchSnapshot();
  }); 


  it('firstname input respond to change event and change state of the Register Component', () => {

    const componentInput = shallow(<Register />);
    const emailTest = componentInput.find('Input').at(0);

    emailTest.props().onChange({
        target: {
            name: 'firstname',
            value: 'abcd@gmail.com'
        }
    });

    expect(componentInput.state('firstname')).toEqual('abcd@gmail.com');
})

it('lastname input respond to change event and change state of the Register Component', () => {

  const componentInput = shallow(<Register />);
  const emailTest = componentInput.find('Input').at(1);

  emailTest.props().onChange({
      target: {
          name: 'lastname',
          value: 'abcd@gmail.com'
      }
  });

  expect(componentInput.state('lastname')).toEqual('abcd@gmail.com');
})

it('email input respond to change event and change state of the Register Component', () => {

  const componentInput = shallow(<Register />);
  const emailTest = componentInput.find('Input').at(2);

  emailTest.props().onChange({
      target: {
          name: 'email',
          value: 'abcd@gmail.com'
      }
  });

  expect(componentInput.state('email')).toEqual('abcd@gmail.com');
})

it('password input respond to change event and change state of the Register Component', () => {

  const componentInput = shallow(<Register />);
  const emailTest = componentInput.find('Input').at(3);

  emailTest.props().onChange({
      target: {
          name: 'password',
          value: 'abcd@gmail.com'
      }
  });

  expect(componentInput.state('password')).toEqual('abcd@gmail.com');
})

it('rpassword input respond to change event and change state of the Register Component', () => {

  const componentInput = shallow(<Register />);
  const emailTest = componentInput.find('Input').at(4);

  emailTest.props().onChange({
      target: {
          name: 'rpassword',
          value: 'abcd@gmail.com'
      }
  });

  expect(componentInput.state('rpassword')).toEqual('abcd@gmail.com');
})

});