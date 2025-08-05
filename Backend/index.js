import express from 'express'
const app = express()
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cors from "cors"
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
dotenv.config()
const port = process.env.PORT ;  //this is the technique to used to port of the dotenv folder which was provide security

app.use(express.json())
app.use(cookieParser())
app.use(cors(   
    {
        origin:["https://e-commerece-admin.onrender.com","https://e-commerece-frontend-hhi2.onrender.com"],
        credentials:true
    }
))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)





app.listen(port,()=>
    {
    console.log("hello from server");
    connectDb();  //called the database for connecting
}
)
