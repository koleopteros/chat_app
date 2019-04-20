import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import isLoggedIn from '../../utils/isLoggedIn';

class Landing extends Component {
    render() {
        if(isLoggedIn){
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
export default Landing;