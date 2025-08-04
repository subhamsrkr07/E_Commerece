import jwt from 'jsonwebtoken'


const adminAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies

        if (!token) {
            return res.status(400).json({ message: "user does not token for Admin_pannel" })
        }


        let verifyToken;
        try {
            verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ message: "Invalid token for Admin_panel" });
        }
        req.adminEmail = process.env.ADMIN_EMAIL
        next()

    } catch (error) {
        console.log("is adminAuth error")
        return res.status(500).json({ message: `is aadminAuth error ${error}` })
    }
}


export default adminAuth