import React from "react";
import Login  from './Login'

describe('<Login/>', () => {

test('Component Mount test', () => {

const component = shallow(<Login></Login>);

expect(component.find('h3').text()).toEqual('Play with products');

})

});