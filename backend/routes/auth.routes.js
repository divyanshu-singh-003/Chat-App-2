import express from "express";

const router=express.Router();

router.post("/login",(req,res)=>{
    res.send("Login Route");
});
router.post("/signup",async(req,res)=>{
    try{
        const {fullName,username,password,confirmPassword,gender}=req.body;
    }
    catch(e){
        
    }
});
router.post("/signout",(req,res)=>{
    res.send("Signout Route");
});


export default router;

