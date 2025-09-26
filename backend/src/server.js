import dotenv from "dotenv"
dotenv.config();
import express from "express";
const app=express();
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/ratelimiter.js"

console.log("MONGO_URI from env:", process.env.MONGO_URI);

//middleware
app.use(express.json());
app.use(ratelimiter);
app.use((req,res,next)=>{
console.log(`req methode is ${req.method}`)
next()
})
app.use("/api/notes",notesRoutes);
const port=process.env.PORT || 5000



connectDB().then(()=>{
   
    app.listen(port,()=>{
    console.log("server started ...");
    });
})
