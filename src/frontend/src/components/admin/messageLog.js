import React, { Component } from 'react';

class MessageLog extends Component {
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
                    </tbody>  
                </table>
            </div>

        )
    }
}

export default MessageLog;