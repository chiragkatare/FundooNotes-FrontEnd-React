import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import NotVerified from '../Notverified';
const mockFn = jest.fn();


// configure({ adapter: new Adapter() });

describe('NotVerified', () => {



  it('should render correctly in "debug" mode', () => {
    const component = shallow(<NotVerified debug />);
    // const component = mount(<Login debug />);
    expect(component).toMatchSnapshot();
  });

  it('should render login page Button', () => {
    const component = shallow(<NotVerified debug />);
    const loginButton = component.find('#login');
    expect(loginButton.text()).toEqual('<WithStyles(Button) />');
  });
});