import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendMessage, getMessages } from '../../actions/socket';
import { SEND_MESSAGE, ASSIGN_ROOM } from '../../actions/socketEventTypes';
// import socket from './socket';

class Chatroom extends Component{
    componentDidMount() {
        const { dispatch } = this.props;
        const { name } = this.props.auth.user;
        const { room } = this.props.socket.room;
        getMessages(dispatch);
        dispatch({ type: ASSIGN_ROOM, payload: {name:name, room:room}});

    }
    sendMessage = () => {
        const { dispatch } = this.props;
        const { name, room } = this.props.socket;
        let message = document.getElementById('inputMessage').value;
        const data = {
            user:name,
            room:room,
            message:message
        }
        document.getElementById('inputMessage').value = '';
        dispatch({type:SEND_MESSAGE, data: data});
        sendMessage(data);
    }
    keyCapture = e => {
        if(e.key === 'Enter') this.sendMessage();
    }
    render() {
        const { messageList } = this.props.socket;
        var i = 0;
        return (
            <div className='container'>
                <div className='chatArea'>
                    {
                        messageList.map( message => (
                            <p key={i++}><b>{message.user}</b>: {message.message}</p>
                        ))
                    }
                </div>
                <div className='inputMessage'>
                    <input id="inputMessage" placeholder="Please Type Here, Onii-chan" onKeyPress={this.keyCapture} onChange={this.onInput}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth:state.auth,
    socket:state.socket
  });
  export default connect(mapStateToProps)(Chatroom);