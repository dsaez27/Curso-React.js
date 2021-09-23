import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '../../../setupTest';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Sidebar } from './../../../components/journal/Sidebar';
import { startLogout } from '../../../redux/actions/auth';
import { startNewNote } from '../../../redux/actions/notes';

jest.mock('../../../redux/actions/auth', () => ({
    startLogout: jest.fn(),
}));

jest.mock('../../../redux/actions/notes', () => ({
    startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: '123',
        name: 'test',
    },
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

const wrapper = mount(
    <Provider store={store}>
        <Sidebar />
    </Provider>
);

describe('Pruebas en el Sidebar', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar el logout', () => {
        wrapper.find('button').prop('onClick')();
        expect(startLogout).toHaveBeenCalled();
    });

    test('Debe de llamar el newNotes', () => {
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalled();
    });
});
