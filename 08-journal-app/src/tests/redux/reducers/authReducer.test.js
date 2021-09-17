import { authReducer } from './../../../redux/reducers/authReducer';
import { types } from './../../../redux/types';

describe('Pruebas en el authReducer', () => {
    // {
    //     uid: 'sdhfaksdf8safdasdf0af8s9df',
    //     name: 'Daniel',
    // }
    test('Debe de retornar el valor por defecto', () => {
        const state = authReducer({}, {});

        expect(state).toEqual({});
    });

    test('Debe de retornar el uid y el name', () => {
        const action = {
            type: types.login,
            payload: {
                uid: 'sdhfaksdf8safdasdf0af8s9df',
                displayName: 'Daniel',
            },
        };

        const state = authReducer({}, action);
        expect(state).toEqual({
            uid: 'sdhfaksdf8safdasdf0af8s9df',
            name: 'Daniel',
        });
    });

    test('Debe de borrar el name y el uid', () => {
        const action = {
            type: types.logout,
        };

        const state = authReducer(
            { uid: 'sdhfaksdf8safdasdf0af8s9df', name: 'daniel' },
            action
        );

        expect(state).toEqual({});
    });
});
