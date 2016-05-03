var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var followSchema = new Schema({
    // person are followed
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // person follows someone
    followers:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    }]
});


var Follow = mongoose.model("Follow", followSchema);

module.exports = {
    Follow: Follow
};