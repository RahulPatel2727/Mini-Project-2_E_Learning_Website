import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log("connected :)");
    }
    catch(e)
    {
        console.log(e);
        console.log("failed :(");
    }
}


export default connectDB;