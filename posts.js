const express = require("express")

const router = express.Router()

const Post = require("./models/Post")




//get back all the posts
router.get("/", async function (req, res) {
    try {
      const posts = await Post.find().exec();
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });


router.get('/specific',(req,res)=>{res.send("specific")});

//submits a new post
router.post('/',(req,res)=>
{
    const post = new Post({title:req.body.title,des:req.body.des})

    post.save()
    .then(data=>{res.json(data)})
    .catch(err=>{console.log(err)})





});

// Get a specific post
router.get("/:postId", async function (req, res) {
    try {
      const post = await Post.findById(req.params.postId);
      res.json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  
  // Delete a post
  router.delete("/:postId", async function (req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params.postId);
      res.json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  
  // Update a post
  router.patch("/:postId", async function (req, res) {
    try {
      const post = await Post.findByIdAndUpdate(req.params.postId, req.body, {
        new: true,
      });
      res.json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });



module.exports =  router