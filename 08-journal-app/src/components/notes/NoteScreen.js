import React, { useEffect, useRef } from 'react';
import { NotesAppBar } from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from './../../hooks/useForm';
import { activeNote, startDeleting } from '../../redux/actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector((state) => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef(note.id);
    const activeUrl = useRef(note.url);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
        if (note.url !== activeUrl.current) {
            reset(note);
            activeUrl.current = note.url;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(note.id));
    };

    return (
        <div className='notes__main-content'>
            <NotesAppBar />
            <div className='notes__content'>
                <input
                    className='notes__title-input'
                    type='text'
                    placeholder='Some awesome title'
                    autoComplete='off'
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='What happened today?'
                    className='notes__textarea'
                    name='body'
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {note.url && (
                    <div className='notes__image'>
                        <img src={note.url} alt='img' />
                    </div>
                )}
            </div>
            <button className='btn btn-danger' onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};
