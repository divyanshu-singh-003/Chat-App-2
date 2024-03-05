import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";

import connectToMongo from "./db/connectToMongo.js";

dotenv.config();

const app=express();

const PORT=process.env.PORT || 5000;



// app.get("api/auth/signup",(req,res)=>{
// console.log("Signup route");
// });

// app.get("api/auth/login",(req,res)=>{
//     console.log("Signup route");
// });

// app.get("api/auth/logout",(req,res)=>{
//     console.log("Signup route");
// });
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

//to parse requests from user body

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });



app.listen(PORT,()=>{
    connectToMongo();
    console.log("I am here");
    console.log(`Listening...${PORT}`);
})