import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { CalendarScreen } from './../components/calendar/CalendarScreen';
import { LoginScreen } from './../components/auth/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/auth/login' component={LoginScreen} />
                    <Route exact path='/' component={CalendarScreen} />
                    <Redirect to='/auth/login' component={LoginScreen} />
                </Switch>
            </div>
        </Router>
    );
};
