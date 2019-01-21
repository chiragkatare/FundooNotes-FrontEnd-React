import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import ForgotPassword from '../ForgotPassword';

// configure({adapter: new Adapter()});

describe('ForgotPassword', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ForgotPassword debug />);
  
    expect(component).toMatchSnapshot();
  });

  it('renders a email input', () => {
    const componentInput = shallow(<ForgotPassword />);
    expect(componentInput.find('Input').length).toEqual(1);
  })

  it('email input respond to change event and change state of the Register Component', () => {

    const componentInput = shallow(<ForgotPassword />);
    const emailTest = componentInput.find('Input').at(0);
  
    emailTest.props().onChange({
        target: {
            name: 'email',
            value: 'abcd@gmail.com'
        }
    });
  
    expect(componentInput.state('email')).toEqual('abcd@gmail.com');
  })

  
});