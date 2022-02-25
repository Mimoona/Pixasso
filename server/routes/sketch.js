const express = require("express");
const sketchRouter = express.Router();
const Sketch = require("../models/Sketch");
require('dotenv').config();

  sketchRouter.post('/upload', async (req, res) => {
    try {
      const newImage = new Sketch({
        sketch_Url: req.body.sketch_Url
      });
      await newImage.save();
      res.json(newImage.sketch_Url);
    } catch (err) {
      console.error('Something went wrong', err);
    }
  });
  
  module.exports = sketchRouter;