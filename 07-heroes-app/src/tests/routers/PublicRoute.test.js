import React from 'react';
import { mount } from 'enzyme';
import { PublicRoute } from './../../routers/PublicRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => {
    const props = {
        location: { pathname: '/login' },
    };

    test('Debe de bloquear si el componente está desautenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated={false}
                    component={() => <span>:D</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(true);
    });
});
