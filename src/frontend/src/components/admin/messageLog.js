import React, { Component } from 'react';
import axios from 'axios';

class MessageLog extends Component {

    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        let dbURL = "api/v0/messages"
        axios.get(dbURL).then(res => { this.setState({ results: res.data}) } )
    }

    render() {
        return (

            <div>
                <p>Message Logs</p>
                <table className="black-text striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Sender</th>
                            <th scope="col">Receiver</th>
                            <th scope="col">Message</th>
                            <th scope="col">Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Insert ID</td>
                            <td>Insert Date</td>
                            <td>Insert Time</td>
                            <td>Insert Sender</td>
                            <td>Insert Receiver</td>
                            <td>Insert Message</td>
                            <td>Insert Room</td>
                        </tr>
                        {
                            this.state.results.map(results => 
                            <tr>
                            <td>{results.id}</td>
                            <td>{results.timestamp}</td>
                            <td>{results.time}</td>
                            <td>{results.sender}</td>
                            <td>{results.val}</td>
                            <td>{results.message}</td>
                            <td>{results.room}</td>
                            </tr>
                            )
                        }
                    </tbody>  
                </table>
            </div>

        )
    }
}

export default MessageLog;