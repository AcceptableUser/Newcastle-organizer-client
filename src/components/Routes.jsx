import React from "react"
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import BoardPage from '../pages/BoardPage';
import {PrivateRoute} from "./private-route/PrivateRoute";
import BoardsPage from "../pages/BoardsPage";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/signup" exact component={SignupPage}/>
                <PrivateRoute path="/boards/:id" exact component={BoardPage}/>
                <PrivateRoute path="/boards" exact component={BoardsPage}/>
            </Switch>
        </Router>
    );
}

export default Routes;
