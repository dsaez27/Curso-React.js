import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { db } from '../../../firebase/firebaseConfig';
import {
    startNewNote,
    startLoadingNotes,
    startSaveNote,
    startUploading,
} from './../../../redux/actions/notes';
import { types } from './../../../redux/types';

jest.mock('../../../helpers/fileUpload', () => ({
    fileUpload: jest.fn(() => {
        //return 'https//holaa-mundo.com/cosa.jpg'
        return Promise.resolve('https//hola-mundo.com/cosa.jpg');
    }),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING',
    },
    notes: {
        active: {
            id: '3bgSVmDI0PXylUFtfFn3',
            title: 'Test Note',
            body: 'This is a test note',
        },
    },
};

let store = mockStore(initState);

describe('Pruebas cons las acciones de notes', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

    afterEach(() => {
        delete global.__mobxInstanceCount; // prevent warnings
    });

    test('Debe de crear una nueva nota', async (done) => {
        try {
            await store.dispatch(startNewNote());
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: types.notesActive,
                payload: {
                    id: expect.any(String),
                    title: '',
                    body: '',
                    date: expect.any(Number),
                },
            });

            expect(actions[1]).toEqual({
                type: types.notesAddNew,
                payload: {
                    id: expect.any(String),
                    title: '',
                    body: '',
                    date: expect.any(Number),
                },
            });

            const docId = actions[1].payload.id;
            await db.doc(`${'/TESTING'}/journal/notes/${docId}`).delete();

            done();
        } catch (error) {
            console.log(error);
        }
    });

    test('startLoadingNotes debe cargar las notas', async () => {
        await store.dispatch(startLoadingNotes('TESTING'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array),
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        };

        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('startSaveNote debe de actualizar la nota', async () => {
        const note = {
            id: 'MdZ2FiLMoVQPFPG5lqRy',
            title: 't',
            body: 'b',
        };

        await store.dispatch(startSaveNote(note));

        const actions = store.getActions();
        expect(actions[0].type).toBe(types.notesUpdated);

        const docResult = await db
            .doc(`${'/TESTING'}/journal/notes/${note.id}`)
            .get();
        expect(docResult.data().title).toBe(note.title);
    });

    global.scrollTo = jest.fn();

    test('startUploading debe actualizar el url del entry', async () => {
        const file = new File([], 'foto.jpg');
        await store.dispatch(startUploading(file));

        const docRef = await db
            .doc(`${'/TESTING'}/journal/notes/3bgSVmDI0PXylUFtfFn3`)
            .get();
        expect(docRef.data().url).toBe('https//hola-mundo.com/cosa.jpg');
    });
});
