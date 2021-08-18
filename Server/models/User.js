const mongoose =require('mongoose');
const jwt=require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        isEmail:true,
    }, 
    password:{
        type:String,
        required:true,
    }, 
    date:{
        type:Date,
        default:Date.now
    },
    tokens:[
        {
            token:{
            type:"string",
            required:true
        }
        }]
})

userSchema.methods.generateAuthToken=async function(){
    try {
      
     const token=jwt.sign({_id:this._id},process.env.TOKEN_SECRET)
     this.tokens=this.tokens.concat({token:token})
     await this.save();
     return token

    } catch (error) {
        console.log("Error while generation Token",error)
    }
}
module.exports=mongoose.model("User",userSchema);
