import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '../../setupTest';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { login } from '../../redux/actions/auth';
import { AppRouter } from './../../routers/AppRouter';
import { act } from 'react-dom/test-utils';
import { firebase } from '../../firebase/firebaseConfig';

jest.mock('../../redux/actions/auth', () => ({
    login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: '1',
        },
        notes: [],
    },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en el AppRouter', () => {
    test('Debe de llamar el login si estoy autenticado', async () => {
        let user;

        await act(async () => {
            const userCred = await firebase
                .auth()
                .signInWithEmailAndPassword('test@testing.com', '123456');

            user = userCred.user;
            mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(login).toHaveBeenCalledWith(
            'CMtLe1XTUxRW1BVqf3Ey4WqgSXS2',
            null
        );
    });
});
