import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Login from '../Login';

configure({adapter: new Adapter()});

describe('Login', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Login debug />);
  
    expect(component).toMatchSnapshot();
  });

  it('should not login with empty email',()=>{
    const component = shallow(<Login  />);
    const loginButton = component.find('#loginbtn')
    loginButton.simulate('click');
    const errordiv = component.find('div.error').at(0)
    const text = errordiv.text()
    expect(text).toEqual('Email is required')
  })


  it('should not login with empty password',()=>{
    const component = shallow(<Login  />);
    const loginButton = component.find('#loginbtn')
    loginButton.simulate('click');
    const errordiv = component.find('div.error').at(1)
    const text = errordiv.text()
    expect(text).toEqual('Password cannot be empty')

  })

});