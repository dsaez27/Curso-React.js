import React, { useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { authContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    return (
        JSON.parse(localStorage.getItem('use')) || {
            logged: false,
        }
    );
};

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    return (
        <authContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </authContext.Provider>
    );
};
