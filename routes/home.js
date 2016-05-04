var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict');
var postService = require('../services/post-services');

router.get('/index', restrict, function(req, res, next) {
    postService.getPost(req.user._id, function(err, pos) {
        if (err) {
            res.json({
                "err": "error has occured"
            });
            return console.log('error : ' + err);
        }
        var data = {
            title: 'Home Page',
            firstName: req.user ? req.user.firstName : null,
            post: pos
        };
        res.json({ info: data });
    });
});

module.exports = router;