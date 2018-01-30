import React from 'react';
import { render, shallow } from 'enzyme';
import App from '../components/App';
import Button from '../components/Button';

describe('Test if the Button component render correcly', () => {

    it('should render a button tag', () => {
        const shallowWrapper = shallow(<Button onClick={() => {}}
        className="absolute pin-l pin-t mt-6 ml-2"
        children="placeholder"
        />);
        expect(shallowWrapper.find('button').length).toBe(1);
    })

    it('should render the button with the class names stored in dangerstyle when parameter danger is set to true', () => {
        const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';
        const wrapper = shallow(<Button onClick={() => {}} danger={true} children="Button" />)
        expect(wrapper.find('button').hasClass(dangerStyle)).toEqual(true);
    })

    it('should render the buttons with the class names stored in the defaultStyle when parameter danger is set to false', () => {
        const defaultStyle = 'bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full';
        const wrapper = shallow(<Button onClick={() => {}} danger={false} children="Button" />)
        expect(wrapper.find('button').hasClass(defaultStyle)).toEqual(true);
    })

    it('should render the button with its parameters in className', () => {
        const classes = "absolute pin-l pin-t mt-6 ml-2";
        const wrapper = shallow(<Button onClick={() => {}} children="Button" className={classes} />);
        expect(wrapper.find('button').hasClass(classes)).toEqual(true);
    })

    it('should have the parameter children between the button tag', () => {
        const shallowWrapper = shallow(<Button onClick={() => {}} children="testing" />);
        expect(shallowWrapper.find('button').text()).toBe('testing');
    })

})