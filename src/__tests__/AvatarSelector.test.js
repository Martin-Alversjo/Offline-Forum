import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import AvatarSelector from '../components/AvatarSelector';
import esmeralda from '../images/esmeralda.png';
import zac from '../images/zac.png';
import morgana from '../images/morgana.png';

describe('Avatar selector should render correcly and have all its properties', () => {

    const shallowWrapper = shallow(<AvatarSelector currentPersona="Steffe" />);
    const mountWrapper = mount(<AvatarSelector currentPersona="Steffe" />);

    it('should render a img tag', () => {
        expect(shallowWrapper.find('img').length).toBe(1);
    })

    it('should render <img /> tag with the correct classNames', () => {
        expect(shallowWrapper.find('img').hasClass('w-12 rounded-full')).toBe(true);
    })

    it('should render a alt tag that contains the text Avatar', () => {
        const imageAlt = shallowWrapper.find("img");
        expect(imageAlt.prop('alt')).toEqual('Avatar');
    })

    it('should render the <img /> tag with src Zac if not Esmeralda or Morgana is defined', () => {
        const imageSrc = shallowWrapper.find('img');
        expect(imageSrc.prop('src')).toEqual(zac);
    })

    it('should render the <img /> tag with Esmeralda image if Esmeralda is passed as props', () => {
        const esmeraldaWrapper = shallow(<AvatarSelector currentPersona={'Esmeralda'} />);
        const src = esmeraldaWrapper.find('img');
        const srcAvatar = esmeraldaWrapper.prop('src');
        expect(srcAvatar).toEqual(esmeralda);
    })

    it('should render <img /> with the right styling provided', () => {
        const image = shallowWrapper.find('img');
        const style = { transform: 'translateY(20px)' };
        expect(image.prop('style')).toEqual(style);
    })

})