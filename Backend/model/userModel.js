import mongoose from "mongoose";

const userSchema = new mongoose.Schema({    // it was the schema which was show which type to data was store in the database
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
        default:{}
    }
},{timestamps:true,minimize:false})


const User = mongoose.model("User",userSchema)
export default User