import React from 'react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
	//* test('debe de mostrar el mensaje "Hola soy Gokú"', () => {
	//* 	const saludo = 'Hola, soy Gokú';
	//* 	const { getByText } = render(<PrimeraApp saludo={saludo} />);
	//* 	expect(getByText(saludo)).toBeInTheDocument();
	//* });

	test('debe de mostrar <PrimeraApp /> correctamente', () => {
		const saludo = 'Hola, Soy Gokú';
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar el subtitulo enviado por props', () => {
		const saludo = 'Hola, Soy Gokú';
		const subtitulo = 'Soy un subtitulo';
		const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);
		const textoParrafo = wrapper.find('p').text();
		expect(textoParrafo).toBe(subtitulo);
	});
});
