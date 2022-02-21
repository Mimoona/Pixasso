const express = require("express");
const sketchRouter = express.Router();
const Sketch = require("../models/Sketch");

sketchRouter.post('/upload', async (req, res) => {
    try {
      const sketch = new Sketch({
        sketch_name: req.body.sketch_name,
        sketch_Url: req.body.sketch_Url
      });
      await sketch.save();
      res.json(sketch.sketch_Url);
    } catch (err) {
      console.error('Something is wrong', err);
    }
  });

sketchRouter.get('/getLatest', async (req, res) => {
    const getImage = await Sketch.findOne().sort({ _id: -1 });
    res.json(getImage.sketch_Url);
  });


  module.exports = sketchRouter;