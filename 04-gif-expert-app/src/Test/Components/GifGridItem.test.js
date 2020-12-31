import React from 'react';
import { GifGridItem } from '../../Components/GifGridItem';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <GifGridItem />', () => {
	const title = 'Un título';
	const url = 'https://localhostalgo.jpg/';
	const wrapper = shallow(<GifGridItem title={title} url={url} />);

	test('debe de mostrar <GifGridItem /> correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de tener un párrafo con un titulo', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

    test('debe de tener la imagen igual al url y l alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
});
