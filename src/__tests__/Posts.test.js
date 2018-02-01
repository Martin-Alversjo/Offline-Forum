import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Posts from '../components/Posts';
import localStorageMock from '../localStorageMock';
import CreateNewPost from "../components/CreateNewPost";
import * as api from '../api';

describe('test so the component renders one div and CreateNewPost component', () => {

    it('should render one div', () => {
        const wrapper = shallow(<Posts currentPersona="Steffe" />);
        expect(wrapper.find("div").length).toBe(1);
    })

    it('should render the CreateNewPost component', () => {
        const wrapper = shallow(<Posts currentPersona="Steffe" />);
        expect(wrapper.find(CreateNewPost)).toBeTruthy();
    })

})

describe('testing Posts components functions', () => {

    const shallowWrapper = shallow(<Posts currentPersona="" />);
    const mountWrapper = mount(<Posts currentPersona="" />);
  
    beforeEach(() => {
      mountWrapper.state().posts = [];
    
    })

    beforeEach(() =>{
        localStorage.clear();
      });
      
      afterEach(() =>{
        localStorage.clear();
      });

      it('should simulate the function setPostFromLocalStorage get post from localstorage', () => {
        let testPost = "Here is a post that hopefully will be read.";  
        const post = JSON.stringify(testPost);
        localStorage.setItem('posts', post);

        const getPost = api.fetchAllPosts();
        let postFromFunction = JSON.stringify(getPost);
        expect(localStorage.getItem('posts')).toEqual(postFromFunction);
      })

      it('should simulate the function removePost', () => {
        const removePost = "Remove me!";
        localStorage.setItem('posts', removePost);
        expect(localStorage.getItem('posts')).toBe(removePost);
        localStorage.removeItem(removePost);
        expect(localStorage.removeItem).toHaveBeenCalled();
      })

})