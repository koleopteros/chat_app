import React, { Component } from 'react';

import EventLog from './eventLog';
import MessageLog from './messageLog';
import UserLog from './userLog';

class Logs extends Component{
    render() {
        return (
            <div>
                {this.props.val === 0? <EventLog/>
                : this.props.val === 1? <MessageLog/>
                : <UserLog/>}
            </div>
        )
    }
}

export default Logs;