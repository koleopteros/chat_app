const config = require('./src/backend/config');
const eventType = require('./src/backend/eventTypes'); 

const axios = require('axios');
const isEmpty = require('is-empty');

let user = '';
let room = null;
let userList = [];
let messageList = [];

module.exports = server => { 
    const io = require('socket.io')(server);

    io.on('connection',(socket) => {
        console.log("Client Connected");
        socket.on(eventType.JOIN_ROOM, data => {
            user = data.user;
            room = data.room;
            userList.concat(data.user);

            let newEvent = {
                type: config.events.conn,
                timestamp: Date.now(),
                user: data.user,
                val: `Joined Room ${data.room}`
            }
            axios.post(`${config.baseURL}:${config.appPort}${config.api}/events/newEvent`,newEvent)
                .then(res => { console.log("Message Event Recorded!");
                }).catch((err) => { console.log(err); })

            socket.join(data.room);
            socket.to(data.room).emit(eventType.SEND_CURRENT_USERS, userList);
        })

        socket.on(eventType.GET_USERS, () => {
            socket.to(data.room).emit(eventType.SEND_CURRENT_USERS, userList);
        })

        socket.on(eventType.GET_MESSAGES, () => {
            socket.to(data.room).emit(eventType.SEND_CURRENT_MESSAGES, messageList);
        })

        socket.on(eventType.UPDATE_MESSAGES, messageList => {
            this.messageList = messageList;
            socket.to(data.room).emit(eventType.UPDATE_MESSAGES, messageList);
        })

        socket.on(eventType.SEND_MESSAGE, data => {
            messageList = messageList.concat({user: data.user, message: data.message})

            let timestamp = Date.now();
            let newMessage = {
                room: data.room,
                timestamp: timestamp,
                sender: data.user,
                message: data.message
            }
            let newEvent = {
                type: config.events.msg,
                timestamp: timestamp,
                user: data.user,
                val: `Room: ${data.room}`
            }
            axios.post(`${config.baseURL}:${config.appPort}${config.api}/events/newEvent`,newEvent)
                .then(res => { console.log("Message Event Recorded!");
                }).catch((err) => { console.log(err); })

            axios.post(`${config.baseURL}:${config.appPort}${config.api}messages/`, newMessage)
                .then((res) => { console.log(`[Room ${data.room}] ${data.user}: ${data.message}`);
                }).catch((err) => { console.log('error occured'); })
            
            socket.to(data.room).emit(eventType.UPDATE_MESSAGES, messageList);
        })
        
        socket.on('disconnect', name => {
            let user = userList.filter( user => user === name );
            if(!isEmpty(user)){
                let newEvent = {
                    type: config.events.disconn,
                    timestamp: Date.now(),
                    user: user,
                    val: `Room: ${room}`,
                }         
                userList = userList.filter( user => user !== name);
                
                axios.post(`${config.baseURL}:${config.dbPort}${config.api}/events/newEvent`, newEvent)
                    .then((res) => { console.log(`[${room}] ${user} disconnected.`);
                    }).catch((err) => { console.log(err); });

                socket.to(chatroom).emit(eventType.SEND_CURRENT_USERS,userList);
            }
        });
    });
}