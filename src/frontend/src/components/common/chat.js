import config from '../../config';
const io = require('socket.io-client');

export default function () {
    var socket = io.connect(`${config.baseURL}:${config.appPort}`);

    const newMessage = onMessageReceived => {
        socket.on('new_message', onMessageReceived);
    }
    const sendMessage = data => {
        socket.emit('new_message',data);
    }
}