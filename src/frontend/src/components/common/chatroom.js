import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import io from "socket.io-client";
import chat from './chat';

const config = require('../../config');

class Chatroom extends Component {
    constructor(props, context) {
        super(props,context);
        const {chatHistory} = props;
        this.state = {
            chatHistory,
            input:''
        }

        this.send.bind(this);
        this.onMessageReceived.bind(this);
    }
    componentDidMount = () => {   
        // this.props.(this.onMessageReceived);     
    }
    send = () => {
        const socket = io(``);
        let message = document.getElementById('inputMessage').value;
        socket.emit('new_message', {
            room: this.props.socket.room,
            timestamp: Date.now(),
            sender: this.props.auth.user.name,
            message: message
        })
        
        document.getElementById('inputMessage').value = '';
    }
    onMessageReceived = msg => {
        this.setState({
            chatHistory: this.state.chatHistory.concat(msg)
        });
    }
    keyCapture = e => {
        if(e.key === 'Enter') this.send();
    }
    render() {
        //const {user} = this.props.auth;
        const {room} = this.props.socket;
        if(room === null) {
            return ( <Redirect to='/dashboard'/> );
        }
        return (
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='chatArea'>
                        {
                            // this.state.chatHistory.map( ({user,message}) => [
                            //     <p>{`${user}: ${message}`}</p>
                            // ])
                        }
                    </div>
                    <div className='inputMessage'>
                        <input id="inputMessage" placeholder="Please Type Here, Onii-chan" onKeyPress={this.keyCapture}/>
                    </div>
                </div>
            </div>
        )
    }
}

Chatroom.propTypes = {
    auth: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth,
    socket:state.socket
});

export default connect(
    mapStateToProps
)(Chatroom);