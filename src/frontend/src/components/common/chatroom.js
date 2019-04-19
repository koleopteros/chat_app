import React, { Component } from 'react';

const config = require('../../../../../config/config');

class Chatroom extends Component {
    constructor() {
        super();

        this.state = {
            endpoint: config.baseURL + ":" + config.appPort
        }
    }

    componentDidMount = () => {
    }

    renders() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Chatroom;