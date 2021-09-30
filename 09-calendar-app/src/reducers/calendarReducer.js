import moment from 'moment';
import { types } from './../types/types';

const initState = {
    events: [
        {
            id: new Date().getTime(),
            title: 'Cumpleaños del jefe',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgColor: '#fafafa',
            notes: 'Comprar el pastel',
            user: {
                _id: '5c9b7f9b8f8b9f0f8c8b8b8b',
                name: 'Daniel',
            },
        },
    ],
    activeEvent: null,
};

export const calendarReducer = (state = initState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload,
            };
        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null,
            };
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(event =>
                    event.id === action.payload.id ? action.payload : event
                ),
            };
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload),
            };
        default:
            return state;
    }
};
