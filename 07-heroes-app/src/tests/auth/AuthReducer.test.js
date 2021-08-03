import { AuthReducer } from '../../auth/AuthReducer';
import { types } from './../../types/types';

describe('pruebas en authReducer', () => {
    // const state = {
    //     name: 'daniel',
    //     logged: true,
    // };

    test('Debe de retornar el valor por default', () => {
        const state = AuthReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('Debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'daniel',
            },
        };

        const state = AuthReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, name: 'daniel' });
    });

    test('Debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        };

        const state = AuthReducer({ logged: true, name: 'daniel' }, action);
        expect(state).toEqual({ logged: false });
    });
});
