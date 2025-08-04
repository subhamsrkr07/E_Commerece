// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs'

// const uploadOnCloudinary = async(filePath)=>{
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY, 
//         api_secret: process.env.CLOUDINARY_API_SECRET 
//     })
//     try {
        
//          if(!filePath){
//         return null
//     }

//      const uploadResult = await cloudinary.uploader.upload(filePath) 
//     fs.unlinkSync(filePath)
//     return uploadResult.secure_url

//     } catch (error) {
//         fs.unlinkSync(filePath)
//         console.log(error)
//     }
   
// }

// export default uploadOnCloudinary




import dotenv from 'dotenv';
dotenv.config();


import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
})

console.log({
  name: process.env.CLOUDINARY_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (filePath) => {
//   if (!filePath) return null;

if (!filePath || !fs.existsSync(filePath)) {
  return null
}


  try {
    const uploadResult = await cloudinary.uploader.upload(filePath);
    fs.unlinkSync(filePath); // Clean up local file
    return uploadResult.secure_url;
  } catch (error) {
    // Try to clean up, but catch unlink error too
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (fsErr) {
      console.error("Failed to delete local file after upload error:", fsErr);
    }

    console.error("Cloudinary upload error:", error);
    return null; // Or throw error if you want to handle it at a higher level
  }
}

export default uploadOnCloudinary;

