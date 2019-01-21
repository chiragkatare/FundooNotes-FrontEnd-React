import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure,mount } from 'enzyme';
import CAppBar from '../CAppBar';


const mockFn = jest.fn();
let props = {
    user: {
        "id": 2,
        "firstname": "chirag",
        "lastname": "katare",
        "email": "chiragkatare123@gmail.com",
        "profilepic": null,
        "email_verified_at": "2019-01-18 05:11:38",
        "created_at": "2019-01-18 05:11:38",
        "updated_at": "2019-01-18 05:11:38",
        "provider": "google",
        "providerprofile": "https://lh3.googleusercontent.com/-1wwCcqQ-5Go/AAAAAAAAAAI/AAAAAAAAAOQ/QIRD_Zo2SM8/s96-c/photo.jpg",
        "verifytoken": "9XzXI2zkKVjWbSpMdj0qkLkiSQL9wTfJ1OUOXorYA5emjZHYaYenJJ3WY3LD",
        "labels": []
    },
    open: false,
}

global.localStorage.setItem("username","chirag");
const component = mount(<CAppBar {...props} Page="lol" />);
describe('CappBar', () => {
    it('should render correctly in "debug" mode', () => {
        // const component = mount(<Login debug />);
        expect(component).toMatchSnapshot();
    });

    it('should change state with props', () => {
        expect(component.state('heading')).toEqual('lol');
    });

    it('should render correctly in "debug" mode', () => {
      
        // const component = mount(<Login debug />);
        expect(component).toMatchSnapshot();
    });
   
});