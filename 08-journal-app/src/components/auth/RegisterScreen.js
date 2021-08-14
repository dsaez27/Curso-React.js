import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form>
                <input
                    className='auth__input mb-1'
                    type='text'
                    placeholder='Name'
                    name='name'
                    autoComplete='off'
                />
                <input
                    className='auth__input mb-1'
                    type='text'
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                />
                <input
                    className='auth__input mb-1'
                    type='password'
                    placeholder='Password'
                    name='password'
                />
                <input
                    className='auth__input mb-1'
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                />
                <button
                    className='btn btn-primary btn-block mb-5'
                    type='submit'
                >
                    Register
                </button>

                <Link to='auth/login' className='link'>
                    Already registered?
                </Link>
            </form>
        </>
    );
};
