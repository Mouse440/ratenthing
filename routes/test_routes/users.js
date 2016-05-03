/*var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var findUserId = function(user, db, next) {
    console.log("DS");
    console.log(user);
    var cursor = db.collection('users').find({
        'email': user.email
    });
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            next(doc);
            console.log(doc);
        }
        else {
            next();
        }
    });
};

var updateSessions = function(user, db, callback) {
    console.log(user);
    console.log("DSADSADSA");
    db.collection('sessions').update({
        'session.cookie.passport.user': user.email
    }, {
        $set: {
            'users_id': 'hello'
        }
    }, function(err, results) {
        if (err) {
            return console.log(err);
        }
        console.log('success');
        console.log(err);
        callback();
    });
};*/