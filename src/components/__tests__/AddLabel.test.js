import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,mount , configure } from 'enzyme';
import AddLabel from '../AddLabel';


const mockFn = jest.fn();


// configure({ adapter: new Adapter() });




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

const component = mount(<AddLabel {...props} />);

describe('AddLabel', () => {
    it('should render correctly in "debug" mode', () => {
       
        // const component = mount(<Login debug />);
        expect(component).toMatchSnapshot();
    });

   
});