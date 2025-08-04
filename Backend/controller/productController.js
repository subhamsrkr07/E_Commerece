import uploadOnCloudinary from "../config/cloudinary.js"
import Product from "../model/productModel.js"

export const addProduct = async (req, res) => {
    try {


    console.log("---- Incoming form data ----")
    console.log("BODY:", req.body)
    console.log("FILES:", req.files)

    // Check if files are missing
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded. Multer might not be working." })
    }

    // Check if any specific image is missing
    const requiredImages = ['image1', 'image2', 'image3', 'image4']
    for (const imgField of requiredImages) {
      if (!req.files[imgField] || req.files[imgField].length === 0) {
        return res.status(400).json({ message: `Missing file: ${imgField}` })
      }
    }

    // Validate all paths exist
    const imagePaths = requiredImages.map(field => req.files[field][0]?.path)
    if (imagePaths.some(path => !path)) {
      return res.status(400).json({ message: "One or more file paths are invalid" })
    }







        let { name, description, price, category, subCategory, bestseller } = req.body


        


        let image1 = await uploadOnCloudinary(req.files.image1[0].path)

        let image2 = await uploadOnCloudinary(req.files.image2[0].path)

        let image3 = await uploadOnCloudinary(req.files.image3[0].path)

        let image4 = await uploadOnCloudinary(req.files.image4[0].path)


        let productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            data: Date.now(),
            image1,
            image2,
            image3,
            image4
        }


        const product = await Product.create(productData)

        return res.status(201).json(product)
    } catch (error) {
        console.log("add_product error")
        return res.status(500).json({ message: `add_product error ${error}` })
    }
}



export const listProduct = async (req,res)=>{
try {
    
const product = await Product.find({})
return res.status(200).json(product)

} catch (error) {
      console.log("list_product error")
        return res.status(500).json({ message: `list product error ${error}`})
}
}

export const removeProduct =async (req,res)=>{
    try {
        let {id}=req.params
        const product =await Product.findByIdAndDelete(id)
return res.status(200).json(product)

    } catch (error) {
        console.log("remove product error")
        return res.status(500).json({ message: `remove product error ${error}`})
    }
}