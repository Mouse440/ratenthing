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

router.post('/like', function(req, res, next) {
    postService.likes(req.body, function(err, post) {
        if (err) {
            console.log('{ method : /like }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : /like }, { status : pass }');
        res.json({
            info: post
        });
    });
});

router.post('/create', function(req, res, next) {
    tagService.findNewTag(req.body.tag, function(err, tag) {
        console.log('dsadasdasd');
        console.log(tag);
        var new_tags = [];
        tag.forEach(function(x) {
            if (!isNaN(x)) {
                new_tags.push(x);
            }
        });
        if (err) {
            console.log("{error: error}");
            return console.log(err);
        }
        if (new_tags.length > 0) {
            console.log(new_tags.length)
            tagService.addTag(req.body.tag, new_tags, function(err, num) {
                if (err) {
                    console.log(err);
                    return console.log('{status : fail}');
                }
                next();
            });
        }
        next();
    });
});

router.post('/create', function(req, res, next) {
    tagService.findTagId(req.body.tag, function(err, tag) {
        if (err) {
            return console.log(err);
        }
        console.log('{status: success}');
        req.body.tag = tag;
        next();
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
            return res.json({
                fail: 'fail'
            });
        }
        console.log('{ status : pass }');
        return res.json({
            success: '/'
        });
    });
});

router.get('/allpost', function(req, res, next) {
    postService.getPostAll(function(err, post) {
        if (err) {
            return console.log('{ status : failed }')
        }
        console.log('{ status : success }');
        res.json({
            status: post
        });
    });
});

router.get('/getbyuser/:id', function(req, res, next) {
    postService.getPostByUser(req.params.id, function(err, post) {
        if (err) {
            console.log('{ method : /getbyuser }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : /getbyuser }, { status : pass }');
        res.json({
            info: post
        });
    });
});

router.get('/getbyid/:id', function(req, res, next) {
    postService.getPostById(req.params.id, function(err, post) {
        if (err) {
            console.log('{ method : /getbyid }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : /getbyid }, { status : pass }');
        res.json({
            info: post
        });
    });
});

router.get('/getbytag/:id', function(req, res, next) {
    postService.getPostByTag(req.params.id, function(err, post) {
        if (err) {
            console.log('{ method : /getbytag }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : /getbytag }, { status : pass }');
        res.json({
            info: post
        });
    });
});

module.exports = router;
