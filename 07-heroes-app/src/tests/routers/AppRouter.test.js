import { mount } from 'enzyme/build';
import { AppRouter } from './../../routers/AppRouter';
import { AuthContext } from './../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {
    const contextVelue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        },
    };

    test('Debe de mostrar el login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextVelue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el componente de marvel si esta autnenticado', () => {
        const contextVelue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Daniel',
            },
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextVelue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
    });
});
