import express from 'express'
import {login,registration,logout, googleLogin, adminLogin} from '../controller/authController.js'

const authRoutes = express.Router() // rooter package used from diierent routes in a differnt folder

authRoutes.post("/registration",registration)
authRoutes.post("/login",login)
authRoutes.get("/logout",logout)
authRoutes.post("/googlelogin",googleLogin)
authRoutes.post("/adminlogin",adminLogin)


export default authRoutes