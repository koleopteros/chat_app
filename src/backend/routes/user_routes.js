const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require('../../../config/config');
const userModel = require('../models/users');
const validateInput = require('../auth/validation');

module.exports = function (router, passport) {
    /**
     * @route GET api/users/
     * @desc Requests all users
     * @access Public
     */
    router.get('/',(req,res,next) => {
        console.log('GET: All users');
        userModel.find({}, (err,user) => {
            if (err) throw err;
            res.json(user)
        })
    });
    /**
     * @route GET api/users/:id
     * @desc Get single user by ID
     * @access Public
     */
    router.get('/:id', (req,res,next) => {
        console.log(`GET: User #${id}`);
        userModel.findById(id, (err,user) => {
            if (err) throw err;
            res.json(user);
        })
    })
    /**
     * @route POST api/users/
     * @desc Add new user
     * @access Public
     */
    router.post('/', (req,res,next) => {
        const {errors, isValid} = validateInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        //check if user exists
        userModel.findOne({name: req.body.name})
            .then(user=> {
                if(user) {
                    return res.status(400).json({name: "Name already exists"})
                }
            });
        const newUser = userModel({
            name: req.body.name,
            password: req.body.password,
        });

        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password,salt, (err,hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    });
    /**
     * @route POST api/users/login
     * @desc Login with credentials
     * @access Public
     */
    router.post('/login', (req,res,next) => {
        const {errors, isValid} = validateInput(req.body);
        if(!isValid){
            return res.status(400).json(errors);
        }
        const name = req.body.name;
        const password = req.body.password;

        userModel.findOne({name})
            .then(user=>{
                if(!user)
                    return res.status(404).json({loginFailed: "Bad username/password!"});
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch){
                            const payload = {
                                id: user.id,
                                name: user.name
                            };
                            jwt.sign(
                                payload,
                                config.secretOrKey,
                                { expiresIn: 604800 },
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    })
                                }
                            )
                        } else {
                            return res.status(400).json({loginFailed: "Bad username/password!"});
                        }
                    });
                
            });
        
    })
}