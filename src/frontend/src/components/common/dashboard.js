import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {    
        const { user } = this.props.auth;
        return (
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        <h3 className='title'>Welcome, {user.name}!</h3>
                        <br />
                        <form>
                            <div>
                                <h4>Please select a chatroom!</h4>
                                <input id="chatroomInput" className="chatroomInput" type="number" defaultValue='0'/>
                            </div>
                            <div>
                                <Link
                                    to="/chatroom" style={{ fontFamily: "monospace" }}
                                    className ="col s5 brand-logo center black-text">
                                    <span className="btn btn-medium green accent-4">Enter</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(
    mapStateToProps,
    {  }
)(Dashboard);