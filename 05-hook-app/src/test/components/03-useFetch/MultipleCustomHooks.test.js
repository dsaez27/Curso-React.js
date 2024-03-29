import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from './../../../components/03-useFetch/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => {
    
    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })

    test('Debe de mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la informacion', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Daniel',
                    quote: 'Hola mundo',
                },
            ],
            loading: false,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Daniel');
    });
});
