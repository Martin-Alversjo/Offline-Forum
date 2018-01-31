import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import CreateNewComment from '../components/CreateNewComment';

describe('testing the form in <CreateNewComment /> component', () => {

    const shallowWrapper = shallow(<CreateNewComment postId="" author="" updateComments={() => {}} />);

    it('should contain a form element', () => {
        expect(shallowWrapper.find('form').length).toBeGreaterThan(0);
    })

    it('form should contain all everything that gets rendered', () => {
        const form = shallowWrapper.find('form');
        const firstForm = form.first();
        expect(firstForm.children()).toEqual(shallowWrapper.children());
    })

    it('should have the correct classes', () => {
        const classes = "container mx-auto flex flex-col p-6";
        expect(shallowWrapper.find('form').hasClass(classes)).toBe(true);
    })

   

})