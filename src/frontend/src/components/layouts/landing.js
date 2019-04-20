import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
    render() {
        const {user} = this.props.auth;
        if(user.name){
            return <Redirect to="/dashboard" />;
        }
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <div className="col s12 center-align">
                            <div className="col s6">
                                <Link to='/registration'
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >Register</Link>
                            </div>
                            <div className="col s6">
                                <Link to='/login'
                                    style={{
                                    marginLeft: "2rem",
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"}}
                                    className="btn btn-large waves-effect white hoverable black-text"
                                >Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(
    mapStateToProps,
)(Landing);