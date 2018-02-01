import React from 'react';
import { render, shallow, mount } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';
import AvatarSelector from '../components/AvatarSelector';
import { debug } from 'util';

describe('it should render a divs', () => {

    const shallowWrapper = shallow(<PersonaSwitcher currentPersona="" changePersona={() => {}} />)

    it('should render 3 divs', () => {
        expect(shallowWrapper.find("div").length).toEqual(3);
    })

    it('first div should render with correct classes', () => {
        const div = shallowWrapper.find("div").first();
        expect(div.hasClass("fixed pin-t pin-r")).toBeTruthy();
    })

    it('first div should contain the other 2 divs', () => {
        const div = shallowWrapper.find("div").first();
        expect(div.children()).toEqual(shallowWrapper.children());
    })

})

describe('component should render another component named AvatarSelector', () => {

    const shallowWrapper = shallow(<PersonaSwitcher currentPersona="" changePersona={() => {}} />)
    const mountWrapper = mount(<PersonaSwitcher currentPersona="" changePersona={() => {}} />);

   

    it('should render the component with AvatarSelector component', () => {
        const avatar = shallowWrapper.find("AvatarSelector");
        expect(shallowWrapper.find("AvatarSelector").length).toBe(1);
    })
    
})
