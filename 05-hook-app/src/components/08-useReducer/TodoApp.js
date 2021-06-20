import React, { useReducer } from 'react';
import './style.css';
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {
    const [state] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola mundo de nuevo</li>
            </ul>
        </>
    );
};
