var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var tagsSchema = new Schema({
    name: {
      type: String,
      required: 'Tags name is required'
    },
    created: {
        type: Date,
        default: Date.now()
    }
}); 


var Tag = mongoose.model("Tag", tagsSchema);

module.exports = {
    Tag: Tag
};