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
                <table className="black-text striped centered">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Sender</th>
                            <th scope="col">Message</th>
                            <th scope="col">Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.results.map(results => 
                            <tr>
                                <td>{Date(results.timestamp)}</td>
                                <td>{results.sender}</td>
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