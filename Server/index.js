const express=require('express');
const app=express();
const userRoute=require("./Routes/LoginRegisterRoute")
const privateRoute=require("./Routes/PrivateRoute")
const mongoose =require('mongoose');
const dotenv=require("dotenv");
const cookieParser = require("cookie-parser");
app.use(cookieParser())

app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/post",privateRoute)
dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true},()=>console.log("Successfully Connected to AuthDatabase...."))
app.listen(5000,()=>console.log("Server is up and running on port 5000..."))
