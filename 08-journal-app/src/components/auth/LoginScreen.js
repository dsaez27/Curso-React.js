import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from './../../hooks/useForm';
import {
    startGoogleLogin,
    startLoginEmailPassword,
} from '../../redux/actions/auth';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'Daniel',
        password: '123456',
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        isFormValid && dispatch(startLoginEmailPassword(email, password));
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };

    const isFormValid = () => {
        if (email.trim().length === 0) {
            return false;
        } else if (password.trim().length === 0) {
            return false;
        }

        return true;
    };

    return (
        <>
            <h3 className='auth__title'>Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    className='auth__input'
                    type='text'
                    placeholder='Email'
                    name='email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className='auth__input'
                    type='password'
                    placeholder='Password'
                    name='password'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    className='btn btn-primary btn-block'
                    type='submit'
                    disabled={loading}
                >
                    Login
                </button>
                <div className='auth__social-networks'>
                    <p>Login with social networks</p>
                    <div className='google-btn' onClick={handleGoogleLogin}>
                        <div className='google-icon-wrapper'>
                            <img
                                className='google-icon'
                                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                                alt='google button'
                            />
                        </div>
                        <p className='btn-text'>
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to='auth/register' className='link'>
                    Create new account
                </Link>
            </form>
        </>
    );
};
