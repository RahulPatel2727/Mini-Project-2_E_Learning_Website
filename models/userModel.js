import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        lowercase: true,
        default: "student"
    }
},{timestamps:true})

export default mongoose.model('user',userSchema);