import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    className='notes__title-input'
                    type='text'
                    placeholder='Some awesome title'
                    autoComplete='off'
                />
                <textarea
                    placeholder='What happened today?'
                    className='notes__textarea'
                ></textarea>
                <div className='notes__image'>
                    <img src='https://i.blogs.es/2e7900/img19_1920x1200/1366_2000.jpg' alt='img'/>
                </div>
            </div>
        </div>
    );
};
