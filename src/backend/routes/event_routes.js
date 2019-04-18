const eventsModel = require('../models/events');

module.exports = function (router) {
    //Events GET
    /**
     * @route GET /api/events/
     * @desc Retrieves all events
     * @access Public
     */
    router.get('/',(req,res,next)=>{
        console.log(`GET: list o' events!`);
        eventsModel.find({}, (err,events)=>{
            if(err) throw err;
            res.json(events);
        });
    });
    /**
     * @route GET /api/events/:id
     * @desc Retrieves all events with id value of :id
     * @access Public
     */
    router.get('/:id', (req,res,next) => {
        console.log(`GET: Event #${id}`);
        eventsModel.findOne({"id":req.params.id})
            .then(data => res.json(data))
            .catch(next);
    })
    /**
     * @route POST /api/events/
     * @desc Adds an event to the database
     * @access Public
     */
    router.post('/newEvent', (req,res,next) =>{
        let newEvent = eventsModel({
            type: req.body.type,
            timestamp: req.body.timestamp,
            user: req.body.user,
            val: req.body.val,
        });
        newEvent.save((err)=>{
            if(err) throw err;
            console.log(`${req.body.type} Event Recorded!`);
        });
        res.send(newEvent);
    });
    
}