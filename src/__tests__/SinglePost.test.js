import React from 'react';
import { render, shallow, mount } from 'enzyme';
import SinglePost from '../components/SinglePost';
import Button from '../components/Button';
import * as api from '../api';

describe('testing so that SinglePost component renders correcly ', () => {

    const props = {
        title: 'The Title',
        content: 'The Content',
        id: '1',
        author: 'Danne',
        currentPersona: 'Janne',
        date: '2018-01-31',
        onClick: () => {}
    }

    const shallowWrapper = shallow(<SinglePost {...props} />);
    const mountWrapper = mount(<SinglePost {...props} />);

    it('should render one div with all content', () => {
        const div = shallowWrapper.find('div').first();
        expect(div.children()).toEqual(shallowWrapper.children());
    })

    it('if currentPerson equals author it should render a close button', () => {
        expect(mountWrapper.find('Button').length).toBe(0);
        mountWrapper.setProps({author: 'Janne'});
        expect(mountWrapper.find('Button').length).toBe(1);
    })

    it('should render the h2 tag with the title text', () => {
        expect(mountWrapper.find('h2').first().text()).toEqual(mountWrapper.props().title);
    });

    it('should render the Comments component', () => {
        expect(mountWrapper.find('Comments').length).toBe(1);
    })

})