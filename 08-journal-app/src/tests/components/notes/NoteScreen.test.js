import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '../../../setupTest';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { NoteScreen } from './../../../components/notes/NoteScreen';
import { activeNote, startDeleting } from '../../../redux/actions/notes';

jest.mock('../../../redux/actions/notes', () => ({
    activeNote: jest.fn(),
    startDeleting: jest.fn(),
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
            id: 1,
            title: 'test',
            body: 'Mundo',
            date: 0,
        },
        notes: [],
    },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('Pruebas en el NoteScreen', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de disparar el activaNote', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'test',
            },
        });
        expect(activeNote).toHaveBeenLastCalledWith(1, {
            body: 'Mundo',
            title: 'test',
            id: 1,
            date: 0,
        });
    });
});
