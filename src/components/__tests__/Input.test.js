import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Input from '../Input';

const mockFn = jest.fn();


// configure({ adapter: new Adapter() });

let props = {
    name:'password',
    type:'text',
    placeholder:'hello',
    label:'label',
    
}
const mockfn = jest.fn()

describe('Input', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Input {...props} />);
        // const component = mount(<Login debug />);
        expect(component).toMatchSnapshot();
      });

      it('should render correctly in with props', () => {
        
        const component = shallow(<Input {...props} />);
        let textfield = component.find('.label');
        expect(component).toMatchSnapshot();
      });
});