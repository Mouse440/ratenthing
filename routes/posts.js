var express = require('express');
var router = express.Router();
var passport = require('passport');
var postService = require('../services/post-services');
var tagService = require('../services/tag-services');
var config = require('../config');

router.get('/create', function(req, res, next) {
    var data = {
        title: "Create Post"
    };
    res.render('posts/create', data);
});

router.get('');

router.post('/create', function(req, res, next) {
    tagService.findTag(req.body.tag, function(err, tag) {
        if (err) {
            console.log("{error: error}");
            return console.log(err);
        }
        if(!tag) {
            tagService.addTag(req.body.tag, function(err) {
                if (err) {
                    console.log(err);
                    var data = {
                        info: req.body.tag,
                        error: err
                    };
                    return console.log('fail');
                }
                console.log('success');
            });
        }
        console.log(req.body.tag);
        console.log("success");
    });
    req.body.author = req.user._id;
    postService.addPost(req.body, function(err) {
        if (err) {
            console.log(err);
            var data = {
                title: "Create a Post",
                info: req.body,
                error: err
            };
            
            return res.render('posts/create', data);
        }
        console.log('success');
        res.redirect('/home/index');
    });
});

router.post('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
