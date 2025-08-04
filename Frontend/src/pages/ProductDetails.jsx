import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'

const ProductDetails = () => {
    let {productId}=useParams()
    let {products,currency,addtoCart,}=useContext(shopDataContext)
    let[productData,setProductData]=useState(false)
    const [image,setImage]=useState(" ")
    const [image1,setImage1]=useState(" ")
    const [image2,setImage2]=useState(" ")
    const [image3,setImage3]=useState(" ")
    const [image4,setImage4]=useState(" ")

    const fetchProductData=async()=>{
        products.map((item)=>{
            if(item._id===productId){
                setProductData(item)
                console.log(productData)
                setImage(item.image1)
                setImage1(item.image1)
                setImage2(item.image2)
                setImage3(item.image3)
                setImage4(item.image4)
                

                return null
            }
        })
    }

    useEffect(()=>{
        fetchProductData()
    },[productId,products])


  return productData ? (
    <div>
      
      <div className=' w-[100vw] h-[130vh] md:h-[100vh] bg-gradient-to-l from-[#141414]
      to-[#0c2025] flex items-center justify-center lg:flex-row gap-[20px]'>

            <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh]
            h-[50vh] mt-[70px] flex items-center justify-start
            md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row'>

                <div className='lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%]
                flex items-center justify-center gap-[50px] lg:gap-[20px]
                 lg:flex-col flex-wrap'>

                    <div className='md:w-[100px] w-[50px] h-[50px]
                     md:h-[110px] bg-slate-300 border-[1px] border-[#80808049]
                     rounded-md'>
                        <img src={image1} alt="" className='w-[100%] h-[100%]
                        cursor-pointer rounded-md' onClick={()=>setImage(image1)}/>
                    </div>
                    <div className='md:w-[100px] w-[50px] h-[50px]
                     md:h-[110px] bg-slate-300 border-[1px] border-[#80808049]
                     rounded-md'>
                        <img src={image2} alt="" className='w-[100%] h-[100%]
                        cursor-pointer rounded-md'  onClick={()=>setImage(image2)}/>
                    </div>
                    <div className='md:w-[100px] w-[50px] h-[50px]
                     md:h-[110px] bg-slate-300 border-[1px] border-[#80808049]
                     rounded-md'>
                        <img src={image3} alt="" className='w-[100%] h-[100%]
                        cursor-pointer rounded-md'  onClick={()=>setImage(image3)}/>
                    </div>
                    <div className='md:w-[100px] w-[50px] h-[50px]
                     md:h-[110px] bg-slate-300 border-[1px] border-[#80808049]
                     rounded-md'>
                        <img src={image4} alt="" className='w-[100%] h-[100%]
                        cursor-pointer rounded-md'  onClick={()=>setImage(image4)}/>
                    </div>

                </div>

                 <div className='lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px]
                    border-[#80808049] rounded-md overflow-hidden'>
                        <img src={image} alt="" className='w-[100%] lg:h-[100%] h-[100%]
                        text-[30px] text-white text-center rounded-md object-fill' />
                    </div>
                
            </div>
            <div className='lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] 
                flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px]
                lg:pl-[0px] lg:px-[opx] lg:py-[0px] gap-[10px]'>
                    <h1 className='text-[40px] font-semibold text-[aliceblue]'>
                        {productData.name.toUpperCase()}
                    </h1>
                    <p className='text-[30px] font-semibold pl-[5px]
                    text-white '> 
                        {currency}{productData.price}
                    </p>
                    <p className='w-[80%] md:w-[60%] text-[20px]
                    font-semibold pl-[5px] text-[white]'>
                        {productData.description} Vidyut provides detailed and engaging descriptions for each battery, including accurate information about capacity, type, compatibility, build quality, and performance. We also feature high-resolution images that showcase the battery from multiple angles, often demonstrated within real devices or in practical use scenarios.
                    </p>
                    <button className='text-[16px] active:bg-slate-500 cursor-pointer
                bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px]
                border-[1px] border-[#90909049] text-white shadow-md shadow-black'
                onClick={()=>addtoCart(productData._id)}>
                    Add TO Cart
                </button>
                   
                </div>
                 
      </div>
 
    </div>
  ) : <div className='opacity-0'></div>
}

export default ProductDetails
