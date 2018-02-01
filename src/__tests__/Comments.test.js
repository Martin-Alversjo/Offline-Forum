import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import Comments from "../components/Comments";
import CreateNewComment from '../components/CreateNewComment';
import SingleComment from '../components/SingleComment';
import localStorageMock from '../localStorageMock';

describe('testing so the <Comments /> component renders correcly', () => {

    const shallowWrapper = shallow(<Comments currentPersona="Steffe" postId="1" />)
    const mountWrapper = mount(<Comments currentPersona="Steffe" postId="1" />)

    it('should render the component with atleast on div', () => {
        expect(shallowWrapper.find('div').length).toBeGreaterThan(0);
    })

    it('should render the component with atleast one h2 tag', () => {
        expect(shallowWrapper.find('h2').length).toBeGreaterThan(0);
    })

    it('should render the component with the CreateNewComment component', () => {
        expect(shallowWrapper.find(CreateNewComment).length).toBe(1);
    })

})
