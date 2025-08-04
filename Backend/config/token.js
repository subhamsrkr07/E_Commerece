import jwt from 'jsonwebtoken'

 const genToken = async(userId)=>{ //this is the token part which was not cleared
    try {
        let token = await jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log("token error")
    }
}

export default genToken


export const genToken1 = async(email)=>{ //this is the token part which was not cleared
    try {
        let token = await jwt.sign({email}, process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log("token error")
    }
}



