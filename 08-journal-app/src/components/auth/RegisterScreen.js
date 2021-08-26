import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../redux/actions/ui';
import { startRegisterEmailPasswordName } from '../../redux/actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {msgError} = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Daniel',
        email: 'dssh26@outlook.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        isFormValid() && dispatch(startRegisterEmailPasswordName(email, password, name));
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(
                setError(
                    'Password should be at least 5 characters and match each other',
                ),
            );
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form onSubmit={handleRegister}>
                { msgError && (
                    <div className='auth__alert-error'>{msgError}</div>
                )}

                <input
                    className='auth__input mb-1'
                    type='text'
                    placeholder='Name'
                    name='name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input mb-1'
                    type='text'
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input mb-1'
                    type='password'
                    placeholder='Password'
                    name='password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input mb-1'
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    autoComplete='off'
                    value={password2}
                    onChange={handleInputChange}
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
