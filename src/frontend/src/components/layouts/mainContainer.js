import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import UserDashboard from '../common/dashboard';
import AdminDashboard from '../admin/dashboard';

class MainContainer extends Component {
    render() {
        const { user } = this.props.auth;
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        { user.name === 'admin'? 
                            <AdminDashboard val={0}/>:
                            <UserDashboard/>
                        }
                    </div>
                </nav>
            </div>
        )
    }
}
MainContainer.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth:state.auth
});

export default connect(
    mapStateToProps,
    {  }
)(MainContainer);