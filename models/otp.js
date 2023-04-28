import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Email is invalid");
            }
        }
    },
    otp: {
        type: Number,
        required: true,
    },
    expiresIn: Number
   
},{timestamps:true})

export default mongoose.model('otp',userSchema,'otp');