import React from 'react';
import { mount } from 'enzyme';
import { RegisterScreen } from './../../../components/auth/RegisterScreen';
import '../../../setupTest';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import { types } from './../../../redux/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
    },
};

let store = mockStore(initState);
//store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);

describe('Pruebas en RegisterScreen', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de hacer el dispatch de la acción respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');
        emailField.simulate('change', { target: { name: 'email', value: '' } });
        wrapper.find('form').simulate('submit', { preventDefault() {} });
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid'
        });
    });

    test('Debe de mostrar la caja de alerta con el error', () => {
        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'El email no es correcto',
            },
        };
        
        let store = mockStore(initState);
        
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen />
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
    })
    
});
