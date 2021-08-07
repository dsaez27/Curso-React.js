import { Navbar } from './../../../components/ui/Navbar';
import { AuthContext } from './../../../auth/AuthContext';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { types } from './../../../types/types';

describe('Pruebas en el <navbar />', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Daniel',
        },
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Daniel');
    });

    test('Debe dede llamar el logout y usar el history', () => {
        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout,
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
});
