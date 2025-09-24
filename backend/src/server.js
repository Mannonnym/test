import dotenv from "dotenv"
dotenv.config();
import express from "express";
const app=express();
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

console.log("MONGO_URI from env:", process.env.MONGO_URI);
app.use("/api/notes",notesRoutes);
connectDB();

app.listen(5001,()=>{
    console.log("server startd ...");
    
});
