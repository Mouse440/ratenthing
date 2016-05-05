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

exports.getPostByUser = function(post, next) {
    Posts.find({
        author: post
    }).sort({
        'created':'descending'
        
    }).populate('author')
    .populate('tag')
    .exec( function(err, post) {
        if (err) {
            console.log('{ method : exports.getPostByUser }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : exports.getPost }, { status : pass }');
        next(err, post);
    });
};

exports.getPostById = function(post, next) {
    Posts
    .find({
        _id: post
    }).sort({
        'created':'descending'
    }).populate('author')
    .populate('tag')
    .exec( function(err, post) {
        if (err) {
            console.log('{ method : exports.getPostById }, { status : fail }');
            return console.log(err);
        }
        console.log('{ method : exports.getPostById }, { status : pass }');
        next(err, post);
    });
};

exports.getPostByTag = function(post, next) {
    Posts.find({
        tag: post
    }).sort({
        'created': 'descending'
    }).populate('author')
    .populate('tag')
    .exec(function(err, post) {
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

exports.likes = function(post, next) {
    Posts
        .update({
            _id: post._id
        }, {
            $set: {
                "likes": post.likes
            }
        }, function(err, item) {
            if (err) {
                console.log('{ method : likes }, { status : fail }');
                return console.log(err);
            }
            console.log('{ method : likes }, { status : fail }')
            next(err, item);
        });
};