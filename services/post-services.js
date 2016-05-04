var Posts = require("../models/posts").Posts;

exports.addPost = function(post, next) {
    var new_post = new Posts({
       title: post.title,
       imgUrl: post.imgUrl,
       content: post.content,
       author: post.author,
       tag: post.tag
    });
    
    new_post.save(function(err) {
        if(err) {
            return next(err);
        } 
        next(null);
    });
};

exports.getPost = function(id, next) {
    Posts.find({author: id}, function(err, post) {
        next(err, post);
    });
};

exports.getPostAll = function(next) {
    Posts
    .find()
    .populate('author')
    .populate('tag')
    .sort({created:'asc'})
    .exec( function(err, post) {
        next(err, post);
    });
};