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

router.post('/create', function(req, res, next) {

    console.log(req.body);
    tagService.findTag(req.body.tag, function(err, tag) {
        if (err) {
            console.log("{error: error}");
            return console.log(err);
        }
        if (!tag) {
            tagService.addTag(req.body.tag, function(err) {
                if (err) {
                    console.log(err);
                    var data = {
                        info: req.body.tag,
                        error: err
                    };
                    return console.log('{status : fail');
                }
                console.log('success');
                next();
            });
        }
        else {
            next();
        }
    });
});

router.post('/create', function(req, res, next) {
    req.body.tag.forEach(function(x) {

        tagService.findTagId(req.body.tag, function(err, tag) {
            if (err) {
                return console.log(err);
            }
            console.log('{status: success}')
            req.body.tag = tag._id;
            next();
        });

    });
});

router.post('/create', function(req, res, next) {
    req.body.author = req.user._id;
    postService.addPost(req.body, function(err) {
        if (err) {
            console.log(err);
            var data = {
                title: "Create a Post",
                info: req.body,
                error: err
            };
            console.log('{status : fail}')
            return res.render('posts/create', data);
        }
        console.log('success');
        return res.json({
            success: '/'
        });
    });
});

module.exports = router;
