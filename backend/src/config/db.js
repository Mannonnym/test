import mongoose from "mongoose";
export const connectDB = async()=>{
try{
 await mongoose.connect("mongodb+srv://saidasma832_db_user:nvc24FamxP3l4z1x@cluster0.gwd22ie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
console.log("MONGO DB CONNECTED SUCCEFULY")
}catch(error){
console.error(error)

}

}