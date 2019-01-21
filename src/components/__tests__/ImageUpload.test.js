import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import ImageUpload from '../ImageUpload';

const mockFn = jest.fn();


// configure({ adapter: new Adapter() });




let props = {
    name: 'password',
    type: 'text',
    placeholder: 'hello',
    label: 'label',
    onChange: mockFn,
    handleImageUpload:mockFn

}

const component = shallow(<ImageUpload {...props} />);

describe('Input', () => {
    it('should render correctly in "debug" mode', () => {

        // const component = mount(<Login debug />);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly in with props', () => {


        let textfield = component.find('input');
        textfield.simulate('change', {
            target: {
                value: 8,
                files:["sd"]
            }
        })
    })
});