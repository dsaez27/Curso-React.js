
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../Components/GifGrid';
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {

    const category = 'One punch'

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes', () => {
        
        const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'cualquier cosa',
			},
			{
				id: '123',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'cualquier cosa',
			},
		];

        useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
        
        
        
    });
});
