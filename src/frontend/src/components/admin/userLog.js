import React, { Component } from 'react';
import PropTypes from 'prop-types';

// I suspect that this is supposed to be what shows
// When the "Rooms" tab is selected.

class UserLog extends Component {
    render() {
        // const { user } = this.props.auth;
        return (

            <div>
                <table className="black-text striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Room</th>
                            <th scope="col">Date Created</th>
                            <th scope="col">Date Edited</th>
                            <th scope="col">Status</th>
                            <th scope="col">Edit Button Column</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Insert ID</td>
                            <td>Insert Room</td>
                            <td>Insert Date Created</td>
                            <td>Insert Date Edited</td>
                            <td>Insert Status</td>
                            <td>Insert EDIT BUTTON GOES HERE</td>
                        </tr>
                    </tbody>  
                </table>
                
            
            <div className='container valign-wrapper' style={{height:'80vh'}}>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        I'm a big boy admin. rawr. {/*{user.name}, {user.iat}, {user.exp}*/}
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12 center-align black-text'> 
                        Filler
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default UserLog;