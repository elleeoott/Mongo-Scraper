var schema = mongoose.Schema;
var mongoose = require("mongoose");

var artSchema = new Schema({

    title: {

        type: String,
        required: true
    },

    url: {

        type: String,
        required: true
    },

    saved: {

        type: Boolean,
        default: false
    }
    
    //reference comments as an array, something to do with object ID
});

var Article = mongoose.model("Article", artSchema);

module.exports = Article;