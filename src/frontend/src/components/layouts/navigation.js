import React, { Component } from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { disconnectUser } from '../../actions/socketEventActions';

class Navigation extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.onHomeClick();
        this.props.logoutUser(this.props.auth.user.name);
    };
    onHomeClick = () => {
        this.props.disconnectUser({
            name: this.props.auth.user.name,
            room: this.props.socket.room
        });
    };
    render() {
        const { user } = this.props.auth;
        const { room } = this.props.socket;
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/dashboard" style={{ fontFamily: "monospace" }}
                            className ="col s5 brand-logo center black-text" onClick={() => {this.onHomeClick()}}>
                            Chat Archive Application
                        </Link>
                        { user.name ? 
                        <div className='right'>
                            <span style={{ fontFamily: "monospace" }} className='col s6 black-text'>{room? `(${room}) `:''}{`User: ${user.name} `}</span>
                            <button style = {{ width: '100px', borderRadius: '3px', margin:'1rem'}}
                                onClick={this.onLogoutClick}
                                className='btn-small wave-effect waves-light hoverable red accent-4'>Logout</button>
                        </div>
                        : ''
                        }
                    </div>
                </nav>
            </div>
        )
    }
}
Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    disconnectUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth,
    socket:state.socket
});

export default connect(
    mapStateToProps,
    { logoutUser, disconnectUser }
)(Navigation);