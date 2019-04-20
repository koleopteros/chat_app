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
        var i = 0;
        return (

            <div className="container">
            <p>Event Logs</p>
                <div className='responsive-table table-status-sheet'>
                    <table className="black-text striped centered">
                        <thead>
                            <tr>
                                <th scope="col">Type</th>
                                <th scope="col">Date</th>
                                <th scope="col">User</th>
                                <th scope="col">EventID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.results.map(results =>     
                                <tr key={i++}>
                                    <td>{results.type}</td>
                                    <td>{(new Date(results.timestamp)).toLocaleString()}</td>
                                    <td>{results.user}</td>
                                    <td>{results.val}</td>
                                </tr>
                                )
                            }
                        </tbody>  
                    </table>
                </div>
            </div>

        )
    }
}

export default EventLog;