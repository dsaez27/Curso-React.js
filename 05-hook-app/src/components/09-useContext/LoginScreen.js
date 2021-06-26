import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser({
            id: 123,
            name: 'Daniel',
            email: 'dssh27@gmail.com'
        })
    }

    return (
        <>
            <h1>LoginScreen</h1>
            <hr />
            <button className='btn btn-primary' onClick={handleLogin}>
                Login
            </button>
        </>
    );
};
