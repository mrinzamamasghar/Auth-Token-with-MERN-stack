const router=require("express").Router();
const User=require('../models/User');
const { registerValidation, loginValidation } = require("../Validation/Validation");
const bcrypt =require("bcryptjs")
const authFunc=require("../Auth/VerifyToken")

router.post("/register",async (req,res)=>{
    const {error}=registerValidation(req.body)
    if (error) { return res.status(200).send(error)}

     const isUserExist=await User.findOne({email:req.body.email})
     if(isUserExist){ return res.send("Email Already Exist")}
 
     const salt=await bcrypt.genSalt(10);
     const hashedPassword=await bcrypt.hash(req.body.password,salt)

     const user=new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword,
    });

    try {
        const newUser=await user.save();
        res.send(newUser)
    } catch (error) {
        res.send("qwe")
    }
})

router.post("/login", async (req,res)=>{
  
    const {error}=loginValidation(req.body)
    if (error) { return res.send(error)}

     const isUserExist=await User.findOne({email:req.body.email})
     if(!isUserExist){ return res.send("Email Doesn't Exist")}

     const validatePassword=await bcrypt.compare(req.body.password,isUserExist.password)
     if(!validatePassword){return res.send("Email and Password doesn't match")}

     const token=await isUserExist.generateAuthToken()

     res.cookie("jwtoken",token,{
         expires:new Date(Date.now()+58900000),
         httpOnly:true,
     })
     res.send("Login Successful")
})

router.get("/allUser",authFunc, async (req,res)=>{
    
    await User.find((err,docs)=>{
        if (!err) {
            res.send(docs)
        }
        else
        {
            res.send("Error while fetching courses-list")
        }
    })
})

module.exports=router;