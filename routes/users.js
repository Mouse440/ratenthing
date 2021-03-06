var express = require('express');
var router = express.Router();
var passport = require('passport');
var config = require('../config');
var userService = require('../services/user-services');

// router.get('/create', function(req, res, next) {
//     var data = {
//         title: "Create an account"
//     };
//     res.render('users/create', data);
// });

router.post('/create', function(req, res, next) {
    userService.addUser(req.body, function(err) {
        if (err) {
            return res.json({
                error: err
            });
        }
        console.log('success');
        req.login(req.body, function(err) {
            res.json({
                success: '/'
            });
        });
    });
});

// router.post('/login', function(req, res, next) {

//         if (req.body.rememberMe) {
//             req.session.cookie.maxAge = config.cookiesMaxAge;
//         }
//         next();
//     },
//     passport.authenticate('local', {
//         failureRedirect: '/',
//         successRedirect: '/home/index'
//     }));

// router.get('/logout', function(req, res, next) {
//     req.logout();
//     res.redirect('/');
// });

module.exports = router;
