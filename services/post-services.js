var Posts = require("../models/posts").Posts;

exports.addPost = function(post, next) {
    var new_post = new Posts({
        title: post.title,
        imgUrl: post.imgUrl,
        content: post.content,
        likes: post.likes,
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
    .find({_id: post._id})
    .update()
}