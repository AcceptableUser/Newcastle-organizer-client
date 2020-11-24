import React from "react"
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import UserPage from '../pages/UserPage';
import BoardPage from '../pages/BoardPage';
import ProjectPage from "../pages/ProjectPage";

function Routes() {
    return (
            <Router>
                <Switch>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/signup" exact component={SignupPage}/>
                    <Route path="/user" exact component={UserPage} />
                    <Route path="/projects/:id" exact component={BoardPage}/>
                    <Route path="/projects" exact component={ProjectPage}/>
                </Switch>
            </Router>
    );
}

export default Routes;
