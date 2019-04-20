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
                <table className="black-text striped centered">
                    <thead>
                        <tr>
                            <th scope="col">Date Created</th>
                            <th scope="col">Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.results.map(results => 
                            <tr>
                            <td>{Date(results.timestamp)}</td>
                            <td>{results.name}</td>
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