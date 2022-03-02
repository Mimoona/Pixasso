const express = require("express");
const userRouter = express.Router();
const verify = require("../middleware/verify");
const User = require("../models/User");

// ----------get all users
userRouter.get("/", verify, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    res.json(err);
  }
});


// userRouter.get('/:name', (req, res) => {
//   User
//   .findOne({username: req.params.name})
//   .then(user => res.json(user))
//   .catch(err => console.log(err))
// })


// userRouter.put( '/:name',async (req, res) => {
//   let findUser = await User.findOne({username : req.params.name}) 
//   await User.updateOne({$set : req.body})
//   findUser = await User.findOne({username: req.params.name})
//   .then(updatedUser => res.json(updatedUser))
//   .catch(err => console.log(err))
// })



userRouter.post("/profile", verify, async (req, res) => {

  const user = await User.findById(req.user._id);


  // try {
  //   const user = new User({
  //     profile_pic_url: req.body.profile_pic_url
  //   });
  //   await user.save();
  //   res.json(user.profile_pic_url);
  // } catch (err) {
  //   console.error('Something went wrong', err);
  // }


  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.profile_pic_Url = req.body.profile_pic_Url || user.profile_pic_Url;
    user.biography= req.body.biography
    // if (req.body.password) {
    //   user.password = req.body.password;
    // }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      profile_pic_Url: updatedUser.profile_pic_Url,
      biography: updatedUser.biography
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
 
});


module.exports = userRouter;


