import React, { Component } from 'react';
import axios from 'axios';

// I suspect that this is supposed to be what shows
// When the "Rooms" tab is selected.

class UserLog extends Component {

    constructor(props){
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        let dbURL = "api/v0/users"
        axios.get(dbURL).then(res => { this.setState({ results: res.data}) } )
    }

    render() {
        return (

            <div>
                <p>User List</p>
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
                        {
                            this.state.results.map(results => 
                            <tr>
                            <td>{results.id}</td>
                            <td>{results.timestamp}</td>
                            <td>{results.time}</td>
                            <td>{results.user}</td>
                            <td>{results.name}</td>
                            <td>{results.ppid}</td>
                            </tr>
                            )
                        }
                    </tbody>  
                </table>
            </div>

        )
    }
}

export default UserLog;