import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './NavBar';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={HomeScreen} />
                        <Route path="/about" exact component={AboutScreen} />
                        <Route path="/login" exact component={LoginScreen} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
