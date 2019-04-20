import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connectUser } from '../../actions/socketEventActions';

class Dashboard extends Component {
    onChange = e => {
        if(this.props.socket.room == null)
            this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        let room = this.props.socket.room != null ? this.props.socket.room : this.state.roomNumber;
        const data = {
            user: this.props.auth.user.name,
            room: room,
        };
        this.props.connectUser(data);
    }

    render() {    
        const { user } = this.props.auth;
        const { room } = this.props.socket;
        if(room) {
        return (<Redirect to={`/chatroom/?room=${room}`}/>);
        }
        return (
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        <h3 className='title'>Welcome, {user.name}!</h3>
                        <br />
                        <form noValidate onSubmit={this.onSubmit}>
                            <div>
                                <h4>Please select a chatroom!</h4>
                                <input id="roomNumber" className="chatroomInput" type="number" defaultValue='0' onChange={this.onChange}/>
                            </div>
                            <div>
                                <button className='btn btn-medium green accent-4'>Enter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {    
    connectUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    socket: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth:state.auth,
    socket:state.socket
});

export default connect(
    mapStateToProps,
    { connectUser }
)(Dashboard);