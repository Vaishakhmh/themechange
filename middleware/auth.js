const jwt=require('jsonwebtoken');
const User=require('../models/user');

const auth=async function(req,res,next){
    try{
        const token=req.header('Authorization').replace('Bearer:','');
        const decoded=await jwt.verify(token,'sapience');
        const user=await User.findOne({_id:decoded._id,token:token})
        if(!user){
            throw new Error({Error:"Unauthorized"});
        }
        req.token=token;
        req.user=user;
        next();
    }catch(err){
        res.status(401).send({Error:"Unauthorized"});
    }
}


module.exports=auth;