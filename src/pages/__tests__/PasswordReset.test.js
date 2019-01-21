import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import PasswordReset from '../PasswordReset';
const mockFn = jest.fn();


// configure({ adapter: new Adapter() });

describe('PasswordReset', () => {



  it('should render correctly in "debug" mode', () => {
    const component = shallow(<PasswordReset debug />);
    // const component = mount(<Login debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly in if password token is correct mode', () => {
    const component = shallow(<PasswordReset debug />);
   component.setState({status:true});

 
   expect(component.state('status')).toEqual(true);
  });

  it('password input Should respond to change event and change state of the Login Component', () => {

    const componentInput = shallow(<PasswordReset />);
    const Test = componentInput.find('#password');
  
    Test.props().onChange({
        target: {
            name: 'password',
            value: 'abcd@123'
        }
    });
  
    expect(componentInput.state('password')).toEqual('abcd@123');
  })

  it('confirm password input Should respond to change event and change state of the passwordreset Component', () => {

    const componentInput = shallow(<PasswordReset />);
    const Test = componentInput.find('#rpassword');
  
    Test.props().onChange({
        target: {
            name: 'rpassword',
            value: 'abcd@123'
        }
    });
  
    expect(componentInput.state('rpassword')).toEqual('abcd@123');
  })

});