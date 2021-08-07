import { mount } from 'enzyme/build';
import { DashboardRoutes } from './../../routers/DashboardRoutes';
import { AuthContext } from './../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <DashboardRoutes />', () => {
    const contextVelue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Daniel',
        },
    };

    test('debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextVelue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Daniel');
    });
});
 