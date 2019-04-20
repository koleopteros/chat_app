import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageLog extends Component {
    render() {
        const { user } = this.props.auth;
        return (

            <div>
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
            </div>

        )
    }
}

export default MessageLog;