import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import DashBoard from '../DashBoard';

configure({adapter: new Adapter()});

describe('DashBoard', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<DashBoard  />);
  
    expect(component).toMatchSnapshot();
  });
});