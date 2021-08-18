const jwt=require("jsonwebtoken")
const User=require("../models/User")

module.exports=async function(req,res,next) {

try {
        const token=  req.cookies.jwtoken;
        const verify=jwt.verify(token,process.env.TOKEN_SECRET)
        const loginUser=await User.findOne({_id:verify._id,"tokens.token":token})
        if (!loginUser) {throw new Error("User Not Found!")}
        req.token=token;
        req.user=loginUser;
        req.userId=loginUser._id
    next();
    } catch (error) {
        res.send("Invalid Token....")
    }
}