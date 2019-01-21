import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount ,configure } from 'enzyme';
import Input from '../Input';

const mockFn = jest.fn();


// configure({ adapter: new Adapter() });




let props = {
    name:'password',
    type:'text',
    placeholder:'hello',
    label:'label',
    onChange:mockFn,
    
}

const component = mount(<Input {...props} />);

describe('Input', () => {
    it('should render correctly in "debug" mode', () => {

        // const component = mount(<Login debug />);
        expect(component).toMatchSnapshot();
      });

      it('should render correctly in with props', () => {
        
  
        let textfield = component.find('input');
        textfield.simulate('change',{target:{
            value:8,
        }})
        expect(component.state('data')).toEqual(8);
      });

      it('should should run the onchange props function', () => {
        
   
        let textfield = component.find('input');
        textfield.simulate('change',{target:{
            value:8,
        }})
        expect(mockFn.mock.calls.length).toEqual(2);
      });



});