const mongoose = require("mongoose");

const sketchSchema = new mongoose.Schema({
    sketch_name: {
        type: String,
    },
    sketch_Url: {
        type: String,
      
    },
    sketch_status: {
        type: Boolean,
        
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Sketch", sketchSchema);
