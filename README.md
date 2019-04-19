This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project used the following guide to learn how to develop a login system with state management in mind, using redux, jwt, and passport.
 - https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

## Available Scripts "npm run ___"

### 'catch-em-all'
 - runs 'npm install' for both backend and frontend

### 'backend'
 - exclusively runs the backend server via nodemon
### 'frontend'
 - exclusively runs the frontend (self explanatory :o)
### 'dev'
 - use concurrently to run both backend and frontend simultaneously!

## Notes
As discussed with a good friend, Huy, I learned storing JWT Tokens in local storage is insecure, and would probably be better off using Cookies instead.
Spent 10 seconds googling and found a pretty good stackoverflow answer regarding storing JWT in local or session storage. Link: https://stackoverflow.com/a/44209185
