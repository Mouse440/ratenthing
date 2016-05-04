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
    tagService.findNewTag(req.body.tag, function(err, tag) {
        console.log('dsadasdasd');
        console.log(tag);
        var new_tags = [];
        tag.forEach(function(x) {
            if(!isNaN(x)) {
                new_tags.push(x);
            }
        });
        if (err) {
            console.log("{error: error}");
            return console.log(err);
        }
        tagService.addTag(req.body.tag, new_tags, function(err, num) {
            if (err) {
                console.log(err);
                return console.log('{status : fail');
            }
            console.log(num);
            console.log(new_tags.length);
            if(num === new_tags.length) {
                next();
            }
        });
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
            return res.json({fail: 'fail'});
        }
        console.log('success');
        return res.json({
            success: '/'
        });
    });
});

router.get('/allpost', function(req, res, next) {
    postService.getPostAll( function(err, post) {
        if (err) {
            return console.log('{ status : failed }')
        }
        console.log('{ status : success }');
        res.json({status : post});
    });
})

module.exports = router;
