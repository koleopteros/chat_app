import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userInfo } from 'os';
// import socketIOClient from "socket.io-client";

const config = require('../../config');

class Chatroom extends Component {
    constructor() {
        super();

        this.state = {
            endpoint: config.baseURL + ":" + config.appPort
        }
    }

    componentDidMount = () => {
    }

    render() {
        const {user} = this.props.auth;
        return (
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='chatArea'>
                        {//fill me with <Message props/> 
                        }asdf

                    </div>
                    <div className='inputMessage'>
                        <input id="inputMessage" placeholder="Please Type Here, Onii-chan"/>
                    </div>
                </div>
            </div>
        )
    }
}

Chatroom.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(
    mapStateToProps,
    {  }
)(Chatroom);