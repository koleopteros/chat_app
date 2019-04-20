let userlist = [];
module.exports = server => { 
    const io = require('socket.io')(server);

    io.on('connection',(socket) => {
        let username;
        let chatroom;

        console.log("Client Connected");
        socket.to(chatroom).emit('client_connection', {
            message: "A new user is connecting...",
            userlist: userlist,
        });

        var addedUser = false;

        socket.on('new_message',(data) => {
            let timestamp = Date.now()
            let usr = socket.username;
            let room = socket.chatroom;

            socket.to(chatroom).emit('new_message', {
                username: usr,
                message: data
            })

            axios.post(`${config.baseURL}:${config.appPort}${config.api}/events/newEvent`,{
                type: config.events.msg,
                timestamp: timestamp,
                user: usr,
                val: `Room: ${room}`,
            }).then((res) => {
            }).catch((err) => {
                console.log(err);
            })

            axios.post(`${config.baseURL}:${config.appPort}${config.api}/messages/newMessage`, {
                room: room,
                timestamp: timestamp,
                sender: usr,
                message: data.message,
            }).then((res) => {
                console.log(`[Room ${data.chatroom}] ${data.username}: ${data.message}`);
            }).catch((err) => {
                console.log(err);
            })
        });

        socket.on('disconnect', () => {
            if(addedUser){
                let leaver = userlist.filter((user)=>user==socket.username);
                let newUserTimeLog = [];
                userlist = userlist.filter((user)=>user!=socket.username);
                for(var iterator = 0; iterator < userTimeLog.length; iterator++){
                    if (userTimeLog[iterator][0] == leaver){
                        newUserTimeLog.concat(userTimeLog[iterator]);
                    }
                }

                console.log("A user disconnected...");
                console.log(leaver[0] + " has left.");

                axios.post(`${config.baseURL}:${config.dbPort}${config.api}/events/newEvent`,{
                    type: config.events.disconn,
                    timestamp: Date.now(),
                    user: username,
                    val: `Room: ${chatroom}`,
                }).then((res) => {
                    console.log(`[${chatroom}] ${username} disconnected.`);
                }).catch((err) => {
                    console.log(err);
                })
            }
            socket.to(chatroom).emit('user left', {
                username: username,
                chatroom: chatroom,
                userlist: userlist
            });
        });
    });
}