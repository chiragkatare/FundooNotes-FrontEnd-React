import React from 'react';

import { shallow,mount , configure } from 'enzyme';
import SideDrawer from '../SideDrawer';


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


const component = mount(<SideDrawer {...props} />);

describe('AddLabel', () => {
    it('should render correctly in "debug" mode', () => {
       
        // const component = mount(<Login debug />);
        expect(component).toMatchSnapshot();
    });

   
});