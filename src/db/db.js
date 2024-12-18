import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected !! DB Host: ${connection.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error");
        process.exit(1);
    }
}