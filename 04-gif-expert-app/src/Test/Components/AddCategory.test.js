import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../Components/AddCategory';

describe('Prueba en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

	
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

	test('debe de mostrar correctamente <AddCategory />', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de cambiar la caja de textos', () => {
		const input = wrapper.find('input');
		const value = 'hola mundo';
		input.simulate('change', { target: { value } });
		expect(wrapper.find('p').text().trim()).toBe(value);
	});

	test('No debe de postear la información con submir', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'hola mundo';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('input').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
