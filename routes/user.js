const express=require('express');
const User = require('../models/user');
const auth=require('../middleware/auth');
const { param } = require('..');

const router=new express.Router();


router.post('/register',async (req,res)=>{
    let user={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    try{
        user=new User(user);
        await user.save();
        const token=await user.generateAuthToken();
        res.status(201).send({user,token});
    }catch(err){
        res.status(500).send({err})
    }
})

router.post('/login',async(req,res)=>{
    try{
        let user=await User.findByCredentials(req.body?.email,req.body?.password)
        let token=await user.generateAuthToken();
        res.status(201).send({user,token})
    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
})

router.get('/validateToken',auth,async(req,res)=>{
    console.log(req);
   if(req.user){
       res.status(200).send(req.user);
   }
})

router.get('/changeTheme/:id',auth,async(req,res)=>{
    try{
        let themeId=req.params.id;
        console.log(themeId);
        let user=await User.findOne({_id:req.user._id})
        user.theme=themeId;
        user=await user.save();
        res.status(201).send({"theme":user.theme});
    }catch(err){
        console.log(err);
        res.status(200).send(err.message);
    }
})

router.get('/logout',auth,async(req,res)=>{
    try{
        let user=await User.findOne({_id:req.user._id})
        user.token=user.token.filter((tok)=>{
            return tok!=req.token;
        })
        await user.save();
        res.status(200).send();
    }catch(err){
        res.status(500).send(err);
    }
})
router.get('/logoutall',auth,async(req,res)=>{
    try{
    let user=await User.findOne({_id:req.user._id});
    user.token=[];
    await user.save();
    res.status(200).send();
    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;

