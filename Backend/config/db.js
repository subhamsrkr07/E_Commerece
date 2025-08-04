import mongoose from "mongoose";
const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)  //here also the url was provide in dotenv
        console.log("DB connected")       //it was the connection part to database to backend
    }catch(error){
        console.log("db.error")
    }
}

export default connectDb