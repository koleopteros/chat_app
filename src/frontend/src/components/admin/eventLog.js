import React, { Component } from 'react';
// import * as eventRoutes from '../../../../backend/routes/event_routes';
// import * as configuration from '../../config'
import axios from 'axios';
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;

class EventLog extends Component {

    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        let dbURL = "api/v0/events"
        axios.get(dbURL).then(res => { this.setState({ results: res.data}) } )
    }

    render() {

        return (

            <div className="container">
            <p>Event Logs</p>
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
                        {
                            this.state.results.map(results => 
                            <tr>
                            <td>{results.type}</td>
                            <td>{results.timestamp}</td>
                            <td>{results.time}</td>
                            <td>{results.user}</td>
                            <td>{results.val}</td>
                            <td>{results.ppid}</td>
                            </tr>
                            )
                        }
                    </tbody>  
                </table>
            </div>

        )
    }
}

export default EventLog;