import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    useContext
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">
                            Login
                        </NavLink>
                        <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};
