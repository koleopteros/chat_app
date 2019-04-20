let appPort;
let baseUrl;

if( process.env.NODE_ENV === "production" ){
    appPort = process.env.PORT;
    baseUrl = "https://secret-wildwood-52771.herokuapp.com" 
}else{
    appPort = 5000;
    baseUrl = "http://127.0.0.1"
}
    
module.exports = {
    mongoURI: process.env.mongoURL || "mongodb+srv://comp3133:24KYpgEkd7Fk0tTM@comp3133-tlxi5.mongodb.net/chatApp",
    secretOrKey: "secret",
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