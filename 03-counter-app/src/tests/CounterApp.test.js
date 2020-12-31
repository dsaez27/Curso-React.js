import React from 'react';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {
	let wrapper;

	//? Antes de ejecutar cada test... ->
	beforeEach(() => {
		wrapper = shallow(<CounterApp value={10} />);
	});

	test('debe de mostrar <CounterApp/> correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar el valor por defecto de 100', () => {
		const wrapper = shallow(<CounterApp value={100} />);
		const valorDefecto = wrapper.find('h2').text().trim();
		expect(valorDefecto).toBe('100');
	});

	test('debe de incrementar con el botón +1', () => {
		wrapper.find('button').at(0).simulate('click');
		const valorDefecto = wrapper.find('h2').text().trim();
		expect(valorDefecto).toBe('11');
	});

	test('debe de decrementar con el botón -1', () => {
		wrapper.find('button').at(2).simulate('click');
		const valorDefecto = wrapper.find('h2').text().trim();
		expect(valorDefecto).toBe('9');
	});

	test('debe de resetear con el botón reset', () => {
		const wrapper = shallow(<CounterApp value={105} />);
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');
		const valorDefecto = wrapper.find('h2').text().trim();
		expect(valorDefecto).toBe('105');
	});
});
