const express = require("express");
const userRouter = express.Router();
const verify = require("../middleware/verify");
const { update } = require("../models/User");
const User = require("../models/User");

// ----------get all users
// userRouter.get("/" async (req, res) => {
//   try {
//     res.json(req.user);
//   } catch (err) {
//     res.json(err);
//   }
// });

userRouter.post('/create', (req, res) => {
  User.create(req.body)
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

userRouter.get('/', (req, res) => {
  User
  .find()
  .populate("sketch_ids")
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

userRouter.get('/:id', (req, res) => {
  User
  .findOne({_id: req.params.id})
  .then(user => res.json(user))
  .catch(err => console.log(err))
})

userRouter.put("/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const updatedUser = {
      username: req.body.username, 
      email: req.body.email,
      profile_pic_url: req.body.profile_pic_url,
      biography: req.body.biography,
      $push: {  sketch_ids:req.body.sketch_ids }
    }
    const options = {new:true}
    const savedUser= await User.findByIdAndUpdate(id,updatedUser,options);
    res.send(savedUser)

  } catch(error) {
    console.error('Something is wrong', error)
  }
  });


module.exports = userRouter;


