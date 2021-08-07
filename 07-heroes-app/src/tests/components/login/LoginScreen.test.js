import { mount } from 'enzyme';
import { LoginScreen } from './../../../components/login/LoginScreen';
import { AuthContext } from './../../../auth/AuthContext';
import { types } from './../../../types/types';

describe('Pruebas en <LoginScreen />', () => {
    const history = {
        push: jest.fn(),
        replace: jest.fn(),
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
            <LoginScreen history={history} />
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            payload: {
                name: 'daniel',
            },
            type: types.login,
        });

        expect(history.replace).toHaveBeenCalled();
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    });
});
