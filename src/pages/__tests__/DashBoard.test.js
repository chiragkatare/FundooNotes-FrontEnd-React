import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount ,shallow, configure } from 'enzyme';
import DashBoard from '../DashBoard';

// configure({adapter: new Adapter()});
const component = mount(<DashBoard  />);
describe('DashBoard', () => {
 
  

  it('should mount correctly in "debug" mode', () => {

    // const component = mount(<DashBoard  />);
  
    expect(component).toMatchSnapshot();
  });

   it('should render correctly in "debug" mode', () => {

    // const component = mount(<DashBoard  />);
  
    expect(component).toMatchSnapshot();
  });
  

});