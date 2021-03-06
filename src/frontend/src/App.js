import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';

import './App.css';
import store from './store';

import setAuthToken from './utils/setAuthTOken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './components/private-route/privateRoute';

import Navigation from "./components/layouts/navigation";
import Landing from "./components/layouts/landing";
import Dashboard from './components/layouts/mainContainer';
import Registration from './components/auth/register';
import Login from './components/auth/login';
import Chatroom from './components/common/chatContainer';
// import Page404 from './components/Page404';
import configureSocket from './actions/socket';

if(localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  
  console.log(decoded)
  
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    console.log('boom, loggedout');
    store.dispatch(logoutUser());
    window.location.href='./login';
  }
}

export const socket = configureSocket(store.dispatch);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigation/>
            <Switch>
              <PrivateRoute path='/dashboard' component={Dashboard}/>
              <PrivateRoute path='/chatroom' component={Chatroom}/>
              
              <Route exact path='/' component={Landing}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/registration' component={Registration}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
