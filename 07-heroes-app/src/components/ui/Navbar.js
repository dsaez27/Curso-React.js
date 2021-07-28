import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const history = useHistory();

    const {
        user: { name },
    } = useContext(AuthContext);

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: types.logout });
        localStorage.removeItem('user');
        history.replace('/login');
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <h3> Asociaciones </h3>
                </Link>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <div className='navbar-nav'>
                        <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact
                            to='/marvel'
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact
                            to='/dc'
                        >
                            DC
                        </NavLink>
                        <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact
                            to='/search'
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='navbar-nav me-2'>
                        <span className='nav-item nav-link text-info'>
                            {name}
                        </span>
                        <button
                            className='nav-item nav-link btn'
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
