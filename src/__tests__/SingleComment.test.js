import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Posts from '../components/Posts';
import localStorageMock from '../localStorageMock';
import SingleComment from "../components/SingleComment";
import * as api from '../api';

describe('Tests that component renders JSX correcly', () => {

    const shallowWrapper = shallow(<SingleComment key="" onClick={() => {}} id="" author="grege" currentPersona="" comment="" date="" />)

    it('should render 1 div', () => {
        expect(shallowWrapper.find("div").length).toBe(1);
    })

    it('should render the first paragraph with correct className', () => {
        expect(shallowWrapper.find("p").first().hasClass("text-grey-darker mb-4")).toBeTruthy();
    })

    it('should render correcly if author and date is defined', () => {
        const propsAuthor = 'Janne';
        const propsDate = '2018-02-01';
        shallowWrapper.setProps({
            author: propsAuthor,
            date: propsDate
        })
        expect(shallowWrapper.find('p .text-grey-dark').text()).toEqual("Posted by: " + propsAuthor + " @ " + propsDate);
    });

})

