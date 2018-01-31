import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import CreateNewPost from '../components/CreateNewPost';

describe('component should render a form tag with children', () => {

    const shallowWrapper = shallow(<CreateNewPost author={"undefined"} updatePosts={() => {}}  />);

    it('should render a form', () => {
        expect(shallowWrapper.find("form").length).toBeGreaterThan(0);
    })

    it('form should contain all everything that gets rendered', () => {
        const form = shallowWrapper.find('form');
        const firstForm = form.first();
        expect(firstForm.children()).toEqual(shallowWrapper.children());
    })
})
