import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PrivateRoute from '../private-route/privateRoute';
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import EventLog from './eventLog';
import MessageLog from './messageLog';
import UserLog from './userLog';

class Dashboard extends Component {
    render() {
        const { user } = this.props.auth;
        let view = 1;
        const btn1 = () => { view = 1 }
        const btn2 = () => { view = 2 }
        const btn3 = () => { view = 3 }

    
        return (
            <div className="container">

            {/*
                <table className="black-text striped">
                    <thead>
                        <tr>
                            <th scope="col" className="blue white-text center-align">
                            <Link to="/eventLog">Event History</Link></th>
                            <th scope="col" className="center-align">
                            <Link to="/messageLog">Chat History</Link></th>
                            <th scope="col" className="center-align">
                            <Link to="/userLog">Rooms</Link></th>
                        </tr>
                    </thead>  
                </table>
            */}

                <table className="black-text striped">
                    <thead>
                        <tr>
                            <th scope="col" className="blue white-text center-align">
                            <button onClick="btn1">Event History</button></th>
                            <th scope="col" className="center-align">
                            <button onClick="btn2">Chat History</button></th>
                            <th scope="col" className="center-align">
                            <button onClick="btn3">Rooms</button></th>
                        </tr>
                    </thead>  
                </table>

                <table className="black-text striped">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">User</th>
                            <th scope="col">EventID</th>
                            <th scope="col">PPID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Insert Type</td>
                            <td>Insert Date</td>
                            <td>Insert Time</td>
                            <td>Insert User</td>
                            <td>Insert EventID</td>
                            <td>Insert PPID</td>
                        </tr>
                    </tbody>  
                </table>
                
            {/* Attempting to render the appropriate table below this point */}
            <div className="TableDisplay">
                { view == 1 ? <EventLog/> : view == 2 ? <MessageLog/> : <UserLog/> }
            </div>
            {/* Attempting to render the appropriate table above this point */}

            
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        I'm a big boy admin. rawr. {user.name}, {user.iat}, {user.exp}
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        Filler
                    </div>
                </div>
            </div>

            {/*
            <Switch>
              <PrivateRoute exact path='/eventLog' component={EventLog}/>
              <PrivateRoute exact path='/messageLog' component={MessageLog}/>
              <PrivateRoute exact path='/userLog' component={UserLog}/>
            </Switch>
            */}

            </div>
        );
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(
    mapStateToProps,
    {  }
)(Dashboard);