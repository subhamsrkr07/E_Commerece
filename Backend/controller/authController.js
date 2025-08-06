import User from "../model/userModel.js";
import validator from "validator"
import bcrypt from 'bcryptjs'
import genToken, { genToken1 } from "../config/token.js";


export const registration = async (req, res) => {        //this is the registration part here the data was register 
    try {
        const { name, email, password } = req.body;      //we used destructure to retun th data in the body
        const existuser = await User.findOne({ email })       //it was check the user was exist or not
        if (existuser) {
            return res.status(400).json({ message: "user already exist" })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: " enter valid email" })
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "ENTER strong passweord" })
        }
        let hashpassword = await bcrypt.hash(password, 16)

        const user = await User.create({ name, email, password: hashpassword })      //this is the part where the user was create 
        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(201).json(user);

    }
    catch (error) {
        console.log("registration error")
        return res.status(500).json({ message: `registration error ${error}` })

    }
}

export const login = async (req, res) => {
    try {
        let { email, password } = req.body
        const user = await User.findOne({ email })       //it was check the user was exist or not
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "incorrect password" })
        }

        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)


    } catch (error) {
        console.log("login error")
        return res.status(500).json({ message: `login error ${error}` })

    }
}



export const logout = async (req, res) => {
    try {
        // res.clearCookie("token")
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        })
        return res.status(200).json({ messgae: "logout successfully" })

    } catch (error) {
        console.log("logout error")
        return res.status(500).json({ message: `logout error ${error}` })
    }
}

export const googleLogin = async (req, res) => {
    try {
        let { name, email } = req.body
        const user = await User.findOne({ email })       //it was check the user was exist or not
        if (!user) {
            user = await User.create({ name, email })
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log("ggolelogin error")
        return res.status(500).json({ message: `googleLogin error ${error}` })
    }
}

export const adminLogin = async (req, res) => {
    try {
        let { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD) {
            let token = await genToken1(email)
            console.log(token)
            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 1 * 24 * 60 * 60 * 1000
            }) 
            return res.status(200).json(token)
        }
            return res.status(400).json({message:"Invalid Cradentials"})
    } catch (error) {
            console.log("admin_login error")
        return res.status(500).json({ message: `admin_login error ${error}` })
    }
}
