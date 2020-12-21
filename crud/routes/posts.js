const express = require('express');
const router = express.Router() ;
const Post = require('../models/Post')
//get
router.get('/' ,async (req,res)=>{
  try{
    const posts = await Post.find();
  
    res.json(posts)
  } catch(err){
    res.json({message1 : err})
  }

    
})
//poste
router.post('/' ,async (req,res)=>{
    const post = new Post({
        title : req.body.title ,
        description : req.body.description ,
        date : req.body.date 
    });
    try {
      const savedPost = await post.save() ;
      console.log({savedPost})
      res.json(savedPost)
    } catch(err){
      res.json({  err})
    }

});
//put 
router.get('/:postId' ,async (req ,res)=>{
  try{
const post =await Post.findById(req.params.postId);
 res.json(post);
  }
  catch(err){
    res.json({message: err})

  }
})
router.delete('/:postId',async(req,res)=>{
  try{
    const removePost =await Post.remove({ _id :req.params.postId});
     res.json(removePost);
      }
      catch(err){
        res.json({message: err})
    
      }  
})
router.patch('/:postId' ,async (req,res)=>{
  try{
const updatePost= await Post.updateOne(
    { _id :req.params.postId} ,
   {$set:{title : req.body.title}})
res.json(updatePost);
}
catch(err){
  res.json({message: err})

} 
})
module.exports= router ; 