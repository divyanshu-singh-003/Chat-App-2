import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import path from "path"
import cookieParser from "cookie-parser";

import connectToMongo from "./db/connectToMongo.js";
import { app, server } from "./socket/socket.js";
dotenv.config();


const __dirname = path.resolve()
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
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});


//to parse requests from user body

// app.get('/',(req,res)=>{
//     res.send("Hello World");
// });



server.listen(PORT,()=>{
    connectToMongo();
    console.log("I am here");
    console.log(`Listening...${PORT}`);
})