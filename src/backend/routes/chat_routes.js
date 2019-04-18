const messageModel = require('../models/messages');

//Add new message
module.exports = function (router) {
    
    //GET chat history
    /**
     * @route GET /api/messages
     * @desc Displays all messages
     * @access Public
     */
    router.get('/',(req,res,next) => {
        console.log('GET: All chat history');
        messageModel.find({}, (err,history) => {
            if (err) throw err;
            res.json(history)
        })
    });
     /**
     * @route GET /api/messages/user/:user
     * @desc Displays all messages where sender has the value of :user
     * @access Public
     */
    router.get('/user/:user',(req,res,next) => {
        console.log(`GET: Chat History for Username ${req.params.user}`);
        messageModel.find({sender: req.params.user},(err,history)=>{
            if(err) throw err;
            res.json(history);
        });
    });
    /**
     * @route GET /api/messages/room/:room
     * @desc Displays all messages with room value of :room
     * @access Public
     */
    router.get('/room/:room',(req,res,next)=>{
        console.log(`GET: Chat History for Room ${req.params.room}`);
        messageModel.find({room: req.params.room},(err,history)=>{
            if(err) throw err;
            res.json(history);
        });
    });
    /**
     * @route POST /api/messages/
     * @desc Adds a new message
     * @access Public
     */
    router.post('/', (req,res,next) =>{
        let newMsg = messageModel({
            room: req.body.room,
            timestamp: req.body.timestamp,
            sender: req.body.sender,
            message: req.body.message
        });
        newMsg.save((err)=>{
            if(err) throw err;
            console.log(`Message from: ${req.body.sender} recorded!`);
        });
        res.send(newMsg);
    });
}