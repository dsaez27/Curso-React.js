import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from './../../redux/actions/notes';

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);
    const inputArchivo = useRef(null);

    const handleSaveNote = () => {
        console.log(active);
        dispatch(startSaveNote(active));
    };

    const handlePictureClick = () => {
        inputArchivo.current.click();
    };

    const handleArchivoChange = (e) => {
        const file = inputArchivo.current.files[0];
        dispatch(startUploading(file));
    };

    return (
        <div className='notes__appbar'>
            <span>28 August 2021</span>

            <input
                id='fileSelector'
                type='file'
                name='file'
                style={{ display: 'none' }}
                ref={inputArchivo}
                onChange={handleArchivoChange}
            />

            <div>
                <button className='btn' onClick={handlePictureClick}>
                    Pictures
                </button>
                <button className='btn' onClick={handleSaveNote}>
                    Save
                </button>
            </div>
        </div>
    );
};
