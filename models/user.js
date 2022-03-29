const mongoose=require('mongoose')
const bcrypt=require('bcryptjs');
const validator=require('validator');
const jwt=require('jsonwebtoken');
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        maxlength:50,
        unique:true,       
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.default.isEmail(value)){
                throw new Error('Email is Invalid');
            }
        }
    },
    password:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.default.isStrongPassword(value)){
                throw new Error('Password not strong');
            }
        }
    },
    theme:{
        type:Number,
        default:1,
    },
    token:{
        type:Array,
    }
})

userSchema.pre('save',async function(next){
    let user=this;
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    next();
})

userSchema.statics.isUniqueUser=async (username,email)=>{
    let user = await User.findOne({ email })
    if(user){
        throw new Error("Email already exists")
    }
     user=await User.findOne({username})
    if(user){
        throw new Error("Username already exists")
    }    
    return true;   
}
userSchema.methods.toJSON=function(){   
    const userObj=this.toObject();
    delete userObj.password;
    delete userObj.token;
    return userObj;
}

userSchema.statics.findByCredentials=async (email, password) => {
    let user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user
}

userSchema.methods.generateAuthToken = async function () {
    let user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'sapience')
     user.token.push( token )
    await user.save()
    return token
}

const User=mongoose.model('User',userSchema);
module.exports=User;





