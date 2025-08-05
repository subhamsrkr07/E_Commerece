import User from "../model/userModel.js"


export const getCurrentUser =async(req,res)=>{
    try {
        console.log("Cookies received:", req.cookies);

        let user = await User.findById(req.userId).select("-password")
        if(!user){
            return res.status(400).json({message:"user was undifined"})
        }
        return res.status(200).json(user)


    } catch (error) {
          console.log(error)
        return res.status(500).json({ message: `getCurrentUser error ${error}` })
    }
}

export const getAdmin = async(req,res)=>{
    try {
        let adminEmail = req.adminEmail;
        if(!adminEmail){
             return res.status(400).json({message:"admin  was not found"})
        }
        return res.status(201).json({email:adminEmail,
            role:"admin"})
    } catch (error) {
         console.log(error)
        return res.status(500).json({ message: `getadmin error ${error}` })
    }
}

        
