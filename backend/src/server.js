import express from "express";
const app=express();
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
app.use("/api/notes",notesRoutes);
connectDB();
app.listen(5001,()=>{
    console.log("server startd ...");
    
});
//mongodb+srv://saidasma832_db_user:nvc24FamxP3l4z1x@cluster0.gwd22ie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0