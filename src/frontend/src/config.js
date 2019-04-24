let appPort;
let baseUrl;
let api = '/api/v0/';
let apiFull;
    appPort = 5000;
    baseUrl = "https://secret-wildwood-52771.herokuapp.com"
    apiFull = api
module.exports = {
    appPort: appPort,
    baseURL: baseUrl,
    events: {
        login:"LOGGED IN",
        logout:"LOGGED OUT",
        conn: "CONNECTION",
        disconn:"DISCONNECT",
        msg: "MESSAGE",
        err: "ERROR",
    },
    api: api,
    apiFull: apiFull
};
