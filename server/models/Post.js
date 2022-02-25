const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    Caption:{
        type: String
    },
    likes: {
        type: Number 
    },
    share: {
        type: Number
    },
    sketch_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sketch'
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        text : {
            type: String,
            maxlength: 500,
        },
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

module.exports = mongoose.model("Post", postSchema);