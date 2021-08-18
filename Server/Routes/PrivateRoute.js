const router=require("express").Router();
const authFunc=require("../Auth/VerifyToken")


router.get("/",authFunc,async (req,res)=>{

    console.log("][][][][][",req.user)

    res.json({post:{
        title:"this is title",
        content:"This is my first post"
    }})


})



module.exports=router;
