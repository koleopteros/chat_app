let appPort;
let baseUrl;
let api = '/api/v0';
let apiFull;
    appPort = 5000;
    baseUrl = "http://localhost"
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
