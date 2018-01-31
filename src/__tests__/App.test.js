import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import Button from '../components/Button';
import PersonaSwitcher from '../components/PersonaSwitcher';
import Posts from '../components/Posts';
import Bot from '../components/Bot/Bot';
import localStorageMock from '../localStorageMock';
import * as api from '../api';

describe('Tests for <App /> component', () => {

  const shallowWrapper = shallow(<App />);
  const mountWrapper = mount(<App />);

  it('should render app with current page home', () => {
    const activePage = "home";
    expect(shallowWrapper.state().currentPage).toBe(activePage);
  });

  it('should change page when the changePage function is called with parameter', () => {
    const botPage = "bot";
    mountWrapper.instance().changePage();
    expect(mountWrapper.state().currentPage).toBe(botPage);
  });

});


describe('testing the div in the <App /> component', () => {
  
  const shallowWrapper = shallow(<App />);
  const mountWrapper = mount(<App />);

  it('should render page with one div', () => {
    expect(shallowWrapper.find('div').length).toBe(1);
  });

  it('should render div with right classes', () => {
    expect(shallowWrapper.find('div').hasClass('mt-8 mx-auto sm:w-full md:w-3/4 lg:w-2/3')).toBe(true);
  });

  it('should render page with a change page button', () => {
    expect(mountWrapper.find(Button).length).toBe(1);
  });

  it('should render page with a Persona Switcher component', () => {
    expect(mountWrapper.find(PersonaSwitcher).length).toBe(1);
  });

});


describe('test if component should render Posts or Bot', () => {

  const shallowWrapper = shallow(<App />);
  const mountWrapper = mount(<App />);

  beforeEach(() => {
    mountWrapper.setState({currentPage: 'home'});
  });

  it('should render Posts if the state currentPage is equal to home', () => {
    mountWrapper.setState({currentPage: 'home'});
    expect(mountWrapper.find(Posts).length).toBe(1);
  })

  it('should not render Posts if the state currentPage is equal to bot', () => {
    mountWrapper.setState({currentPage: "bot"});
    expect(mountWrapper.find(Posts).length).toBeLessThan(1);
  })

  it('should render Bot if the state currentPage is equal to Bot', () => {
    mountWrapper.setState({currentPage: 'bot'});
    expect(mountWrapper.find(Bot).length).toBe(1);
  });

  it('should not render Bot if the state currentPage is equal to home', () => {
    mountWrapper.setState({currentPage: "home"});
    expect(mountWrapper.find(Bot).length).toBeLessThan(1);
  })

})

describe('test functions related to <App /> state', () => {

  const shallowWrapper = shallow(<App />);
  const mountWrapper = mount(<App />);

  beforeEach(() => {
    mountWrapper.state().currentPersona = 'Steffe';
    mountWrapper.state().currentPage = 'home';
  })

  beforeEach(() =>{
    localStorage.clear();
  });
  
  afterEach(() =>{
    localStorage.clear();
  });

  it('testing the fetchCurrentPersona function', () => {
    const name = JSON.stringify('janne');
    localStorage.setItem('currentPersona', name);
    mountWrapper.setState({currentPersona: name});
    expect(mountWrapper.state().currentPersona).toBe(name);
  })


})