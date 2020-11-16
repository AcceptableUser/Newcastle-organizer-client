import React from "react"
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import UserPage from '../pages/UserPage';

function App() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route path="/login" exact component={LoginPage}/>
              <Route path="/signup" exact component={SignupPage}/>
              <Route path="/user" exact component={UserPage}/>
            </Switch>
          </Router>
      </div>
    );
  }

export default App;
