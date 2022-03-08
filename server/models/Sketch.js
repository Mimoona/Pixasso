const mongoose = require("mongoose");

const sketchSchema = new mongoose.Schema({
    sketch_name: {
        type: String,
        default:"art",
    },
    sketch_url: {
        type: String,
      
    },
    sketch_status: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Sketch", sketchSchema);
