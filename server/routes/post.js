const express = require("express");
const postRouter = express.Router();
const verify = require("../middleware/verify");
const Post = require("../models/Post");



postRouter.post('/createpost', verify,(req,res)=>{
    const {caption} = req.body 
    if(!caption){
        return  res.status(404).json({error:"Plase add all the fields"})
    }
    req.user.password = undefined
    const post = new Post({
        caption,
        sketch_id,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


postRouter.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedBy","_id username")
    .populate("comments.postedBy","_id name")
    .sort('date')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})

module.exports = postRouter;