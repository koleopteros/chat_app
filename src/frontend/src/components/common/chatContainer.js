import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Chatroom from './chatroom';

// const config = require('../../config');

class ChatContainer extends Component {
    render() {
        const {room} = this.props.socket;
        if(room === null) {
            return ( <Redirect to='/dashboard'/> );
        }
        return (
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <Chatroom/>
                </div>
            </div>
        )
    }
}

ChatContainer.propTypes = {
    auth: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth:state.auth,
    socket:state.socket
});

export default connect(
    mapStateToProps
)(ChatContainer);