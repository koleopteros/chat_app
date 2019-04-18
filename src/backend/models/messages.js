const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
    id: Number,
    room: Number,
    timestamp: Number,
    sender: String,
    message: String
})

module.exports = mongoose.model('messages', messagesSchema);
