const mongoose = require("mongoose");

const sketchSchema = new mongoose.Schema({
    sketch_name: {
        type: String,
        max: 255,
        min: 6,
    },
    sketch_image: {
        type: Blob,
        required: true,
    },
    sketch_status: {
        type: Boolean,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Sketch", sketchSchema);
