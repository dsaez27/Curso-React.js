import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import '../../../setupTest';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { activeNote } from '../../../redux/actions/notes';
import { JournalEntry } from './../../../components/journal/JournalEntry';
import { types } from './../../../redux/types';

jest.mock('../../../redux/actions/auth', () => ({
    activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
    id: 1,
    title: 'test',
    body: 'test',
    date: 0,
    url: 'https://google.com',
};

const wrapper = mount(
    <Provider store={store}>
        <JournalEntry {...note} />
    </Provider>
);

describe('Pruebas en JournalEntry', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar el action de activeNote', () => {
        wrapper.find('.journal__entry').prop('onClick')();
        expect(store.dispatch).toHaveBeenCalledWith(
            activeNote(note.id, { ...note })
        );
    });
});
