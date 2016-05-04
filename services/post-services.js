var Posts = require("../models/posts").Posts;

exports.addPost = function(post, next) {
    var new_post = new Posts({
        title: post.title,
        imgUrl: post.imgUrl,
        content: post.content,
        likes: 0,
        author: post.author,
        tag: post.tag
    });

    new_post.save(function(err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
};

exports.getPost = function(post, next) {
    Posts.find({
        author: post._id
    }, function(err, post) {
        if (err) {
            console.log('{ method : exports.getPost }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : exports.getPost }, { status : pass }');
        next(err, post);
    });
};

exports.getPostByTag = function(post, next) {
    Posts.find({
        tag: [post._id]
    }, function(err, post) {
        if (err) {
            console.log('{ method : exports.getPostByTag }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : exports.getPostByTag }, { status : pass }');
        next(err, post);
    });
};

exports.getPostAll = function(next) {
    Posts
        .find()
        .sort({
            'created': 'descending'
        })
        .populate('author')
        .populate('tag')
        .exec(function(err, post) {
            next(err, post);
        });
};

exports.likePost = function(post, next) {
    Posts
        .update({
            _id: post._id
        }, {
            $set: {
                "likes": post.likes
            }
        });
};