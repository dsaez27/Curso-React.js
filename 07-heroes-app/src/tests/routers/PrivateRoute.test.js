import React from 'react';

import { PrivateRoute } from './../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

describe('Pruebas en <PrivateRoute />', () => {
    const props = {
        location: { pathname: '/marvel' },
    };

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta auntenticado y guardar localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'lastPath',
            '/marvel'
        );
    });

    test('Debe de bloquear el componente si no está funcionando', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'lastPath',
            '/marvel'
        );
    });
});
