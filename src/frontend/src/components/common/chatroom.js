import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

const config = require('../../config');

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