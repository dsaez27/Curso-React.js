import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    login,
    logout,
    startLoginEmailPassword,
    startLogout,
} from '../../../redux/actions/auth';
import { types } from './../../../redux/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

    afterEach(() => {
        delete global.__mobxInstanceCount; // prevent warnings
      })

    test('login y logout deben crear la accion respectiva', () => {
        const loginAction = login('dsasdsdasdasd', 'Daniel');
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid: 'dsasdsdasdasd',
                displayName: 'Daniel',
            },
        });

        const logoutAction = logout();
        expect(logoutAction).toEqual({
            type: types.logout,
        });
    });

    test('Debe de realizar el logout', async (done) => {
        try {
            await store.dispatch(startLogout());
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: types.logout,
            });

            expect(actions[1]).toEqual({
                type: types.notesLogoutCleaning,
            });
            done();
        } catch (e) {
            done.fail(e);
        }
    });

    test('Debe de iniciar el startLoginEmailPassword', async (done) => {
        try {
            await store.dispatch(
                startLoginEmailPassword('test@testing.com', '123456')
            );
            const actions = store.getActions();
            expect(actions[1]).toEqual({
                type: types.login,
                payload: {
                    uid: expect.any(String),
                    displayName: null,
                },
            });
            done();
        } catch (e) {
            done.fail(e);
        }
    });
});
