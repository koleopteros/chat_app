import React, { Component } from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navigation extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" style={{ fontFamily: "monospace" }}
                            className ="col s5 brand-logo center black-text">
                            Chat Archive Application
                        </Link>
                        { user.name ? 
                        <div className='right'>
                            <span style={{ fontFamily: "monospace" }} className='col s5 black-text'>{user.name}</span>
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
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navigation);