const express = require("express");
const sketchRouter = express.Router();
const Sketch = require("../models/Sketch");
require('dotenv').config();




sketchRouter.get('/:id', (req, res) => {
  Sketch
  .findOne({_id: req.params.id})
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

  sketchRouter.post('/upload', async (req, res) => {
    try {
      const newImage = new Sketch({
        sketch_url: req.body.sketch_url
      });
      await newImage.save();
      res.json(newImage.sketch_url);
    } catch (err) {
      console.error('Something went wrong', err);
    }
  });

  sketchRouter.put("/:id", async (req, res) => {
    try{
      const id = req.params.id;
      const updatedSketch = {
        sketch_name: req.body.sketch_name, 
        sketch_url: req.body.sketch_url,
        sketch_status: req.body.sketch_status,
      }
      const options = {new:true}
      const savedSketch= await Sketch.findByIdAndUpdate(id,updatedSketch,options);
      res.send(savedSketch)
  
    } catch(error) {
      console.error('Something is wrong', error)
    }
    });
  
  module.exports = sketchRouter;