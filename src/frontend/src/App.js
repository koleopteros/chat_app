import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux';

import './App.css';
import store from './store';

import Navigation from "./components/layout/Navigation";
import Landing from "./components/layout/Landing";
import Registration from './components/auth/register';
import Login from './components/auth/login';

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
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
