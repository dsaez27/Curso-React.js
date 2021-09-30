import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from './../../actions/ui';

export const AddNewFav = () => {
    const dispatch = useDispatch();

    const handleClickNew = () => {
        dispatch(uiOpenModal());
    };

    return (
        <>
            <button className='btn btn-primary fab' onClick={handleClickNew}>
                <i className='fa fa-plus'></i>
            </button>
        </>
    );
};
