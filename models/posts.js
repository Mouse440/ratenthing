var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var postsSchema = new Schema({
    title: {
        type:String,
        require: true
    },
    imgUrl: {
        type:String
    },
    created: {
        type: Date, 
        default:Date.now()
    },
    content:{
        type: String,
        require: true
    },
    rating: {
        type: Number,
        max: 5
    },
    author:{
        type:mongoose.Schema.Types.ObjectId, ref:'User'
    },
    tag:{
     type: mongoose.Schema.ObjectId, ref: 'Tag'
   }
   
}); 


var Posts = mongoose.model("Posts", postsSchema);

module.exports = {
    Posts: Posts
};