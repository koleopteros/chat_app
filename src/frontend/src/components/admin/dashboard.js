import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { user } = this.props.auth;
    
        return (
            <div className="container">

                <table className="black-text striped">
                    <thead>
                        <tr>
                            <th scope="col" className="blue white-text center-align">Event History</th>
                            <th scope="col" className="center-align">Chat History</th>
                            <th scope="col" className="center-align">Rooms</th>
                        </tr>
                    </thead>  
                </table>

                <table className="black-text striped">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">User</th>
                            <th scope="col">EventID</th>
                            <th scope="col">PPID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Insert Type</td>
                            <td>Insert Date</td>
                            <td>Insert Time</td>
                            <td>Insert User</td>
                            <td>Insert EventID</td>
                            <td>Insert PPID</td>
                        </tr>
                    </tbody>  
                </table>
                
            
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        I'm a big boy admin. rawr. {user.name}, {user.iat}, {user.exp}
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        Filler
                    </div>
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