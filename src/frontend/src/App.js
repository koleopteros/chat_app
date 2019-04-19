import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';

import './App.css';
import store from './store';

import setAuthToken from './utils/setAuthTOken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './components/private-route/privateRoute';
import Dashboard from './components/dashboard/dashboard';

import Navigation from "./components/layouts/navigation";
import Landing from "./components/layouts/landing";
import Registration from './components/auth/register';
import Login from './components/auth/login';

if(localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href='./login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigation/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/registration' component={Registration}/>
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
