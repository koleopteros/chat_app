import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { user } = this.props.auth;
    
        return (
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        I'm a big boy admin. rawr. {user.name}, {user.iat}, {user.exp}
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