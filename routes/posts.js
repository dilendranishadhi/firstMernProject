const express=require('express');
const Posts= require('../models/posts');

const router = express.Router();

//save post
router.post('/post/save',(req,res)=>{
    let newPost= new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"post saved sucessfully"
        });
    });
});

router.get('/posts', (req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });

});

router.get("/post/:id",(req,res)=>{
    let postID= req.params.id;
    Posts.findById(postID,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }  
        return res.status(200).json({
            success:true,
            post
        });
    });   
});

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    )

});
router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
            message:"delete unsuccessfull", err
        });
        return res.json({
            message:"Delete success", deletedPost
        });
    });
});

module.exports=router;