import express from "express";
import User from "../models/user.model.js";
const router=express.Router();

router.post("/login",(req,res)=>{
    res.send("Login Route");
});
router.post("/signup",async(req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender}=req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"});
        }
        const user= await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Username already exists"});
        }
        //HASH PASSWORD HERE

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    }
    catch(e){

    }
});
router.post("/signout",(req,res)=>{
    res.send("Signout Route");
});


export default router;

