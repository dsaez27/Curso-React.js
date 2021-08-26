import React from 'react';
import { JournalEntries } from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';
import { startNewNote } from '../../redux/actions/notes';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const {name} = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    };

    const handleAddNew = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='far fa-moon'></i>
                    <span className='journal__sidebar-span'>{name}</span>
                </h3>
                <button className='btn mt-5' onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className='journal__new-entry' onClick={handleAddNew}>
                <i className='fas fa-calendar-plus fa-5x'></i>
                <span className='mt-5'>New Entry</span>
            </div>
            <JournalEntries />
        </aside>
    );
};
