import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from './../../../components/04-useRef/RealExampleRef';

const wrapper = shallow(<RealExampleRef />);

describe('Pruebas en <RealExampleRef />', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    });
    
    test('Debe de mostrar el componente <MultipleCustomHook />', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
});
