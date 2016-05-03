var express = require('express');
var router = express.Router();
var passport = require('passport');
var config = require('../config');
var userService = require('../services/user-services');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (!req.user) {
        console.log('no user logged in');
    }
    res.render('index', {
        title: 'Login'
    });
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
            return res.json({error: 'fail'});
        } else {
            return res.json(200, {url: '/home/index'});
        }
    })(req, res, next);
});

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
