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

})
