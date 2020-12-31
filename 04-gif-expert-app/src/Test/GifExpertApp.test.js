import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en el <GifExpertApp />', () => {
    
    

    test('Debe de mostrarse <GifExpertApp /> correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', () => {
        const category = ['One Punch', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(category.length);
    });
});