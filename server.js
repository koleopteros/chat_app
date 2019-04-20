const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require('path');

const config = require('./config/config');

// DB setup
const db = config.mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to DB!"))
    .catch(err => console.log(err));

// App Setup
const app = express();
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);
app.use(bodyParser.json());
app.use(passport.initialize());
// app.use(cors);
require('./config/passport')(passport);
const server = require('http').Server(app);

// Routes Setup
const userRoutes = express.Router();
const messageRoutes = express.Router();
const eventRoutes = express.Router();

require('./src/backend/routes/user_routes')(userRoutes, passport);
require('./src/backend/routes/chat_routes')(messageRoutes);
require('./src/backend/routes/event_routes')(eventRoutes);

app.use('/api/v0/users', userRoutes);
app.use('/api/v0/messages', messageRoutes);
app.use('/api/v0/events', eventRoutes);

//serve static assets if in prod
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
}

const port = config.appPort;
require('./socket')(server);

server.listen(port, () => console.log(`Server running on port ${port}`));