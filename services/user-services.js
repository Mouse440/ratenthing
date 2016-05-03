var User = require("../models/user").User;

exports.addUser = function(user, next) {
    var new_user = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        created: user.created
    });
    
    new_user.save(function(err) {
        if(err) {
            return next(err);
        } 
        next(null);
    });
};

exports.findUser = function(email, next) {
    User.findOne({email: email}, function(err, user) {
        next(err, user);
    });
}; 

exports.getUserId = function(email, next) {
    User.findOne({email: email}, function(err, user) {
        next(err, user);
    });
};