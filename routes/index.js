var express = require('express');
var router = express.Router();
var passport = require('passport');
var config = require('../config');
var userService = require('../services/user-services');
var randomHelloGenerator = require('../services/random-hello-services');

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
        user: false
    };
    if (req.user) {
        req.user.helloMsg = randomHelloGenerator.genHelloMsg();
        data.user = req.user;
    }
    res.render('index', data);  //render home page
});

router.post('/login', function(req, res, next) {
        if (req.body.rememberMe) {
            req.session.cookie.maxAge = config.cookiesMaxAge;
        }
        next();
    }, function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.json({
                error: 'fail'
            });
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            return res.json({success: '/'});
        });
    })(req, res, next);
});

router.get('/logout', function(req, res, next) {
    req.logout();
    res.json({status:'Bye!'});
});

module.exports = router;
