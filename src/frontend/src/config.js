let appPort;
let baseUrl;

if( process.env.NODE_ENV === "production" ){
    appPort = process.env.PORT;
    baseUrl = "https://chat-archive-application.herokuapp.com" 
}else{
    appPort = 5000;
    baseUrl = "http://127.0.0.1"
}
    
module.exports = {
    appPort: appPort,
    baseURL: baseUrl,
    events: {
        conn: "CONNECTION",
        disconn:"DISCONNECT",
        msg: "MESSAGE",
        err: "ERROR",
        namechange: "NAME_CHANGE",
    },
    api: "/api/v0/",
};