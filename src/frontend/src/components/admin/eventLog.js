import React, { Component } from 'react';

class EventLog extends Component {
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
                    </tbody>  
                </table>
            </div>

        )
    }
}

export default EventLog;