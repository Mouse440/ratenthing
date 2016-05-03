var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var commentSchema = new Schema({
    author:{
        type: mongoose.Schema.ObjectId, 
        ref:'user'
    },
    created: {
       type: Date, 
       default: Date.now
   },
   content:{
       type: String,
       min: 2
   }
}); 

 var Comments = mongoose.model("Comments", commentSchema);

module.exports = {
    Comments: Comments
}
