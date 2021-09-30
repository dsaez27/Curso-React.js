import React from 'react';
import { useDispatch } from 'react-redux';
import { eventDeleted } from './../../actions/events';

export const DeleteEventFav = ({ id }) => {
    const dispatch = useDispatch();
    const handleDeleteEvent = () => {
        dispatch(eventDeleted(id));
    };

    return (
        <button
            className='btn btn-danger fab-danger'
            onClick={handleDeleteEvent}
        >
            <i className='fas fa-trash-alt'></i>
            <span> Borrar Evento</span>
        </button>
    );
};
