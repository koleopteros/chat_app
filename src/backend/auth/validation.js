const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateInput(data){
    let errors = {};
    
    data.name = !isEmpty(data.name) ? data.name : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if(Validator.isEmpty(data.name)) {
        errors.name = "Name is empty!";
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is empty!"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};