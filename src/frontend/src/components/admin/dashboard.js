import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logs from './logs';

class Dashboard extends Component {
    constructor() {
        super();
        this.val = 0;
    }
    changeComponent = val => {
        this.val = val;
        this.setState({val:this.val})
    }
    render() {        
        return (
            <div className='row'>
                <div className="col s12 center-align black-text">
                    <button onClick={() => {this.changeComponent(0)}} className='btn btn-large'>Event Logs</button>
                    <button onClick={() => {this.changeComponent(1)}} className='btn btn-large'>Message Logs</button>
                    <button onClick={() => {this.changeComponent(2)}} className='btn btn-large'>User List</button>
                    <Logs val={this.val}/>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth:state.auth,
});

export default connect(
    mapStateToProps
)(Dashboard);