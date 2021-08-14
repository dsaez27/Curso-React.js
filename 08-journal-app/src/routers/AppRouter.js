import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { LoginScreen } from './../components/auth/LoginScreen';
import { JournalScreen } from './../components/journal/JournalScreen';

export const AppRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
                <Route
                    path='/auth'
                    component={AuthRouter}
                   
                />
                <Route
                    exact
                    path='/'
                    component={JournalScreen}
                />
                <Redirect to='/auth/login' component={LoginScreen} />
            </Switch>
        </div>
    </Router>
    )
}
