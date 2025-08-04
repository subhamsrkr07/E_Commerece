import React from 'react'
import image1 from "../assets/image1.webp"
import image2 from "../assets/image2.webp"
import image3 from "../assets/image3.webp"
import image4 from "../assets/image4.webp"

function Background({heroCount}) {

    if (heroCount === 0) {
        return <img src={image1 } alt="" className='w-[50%] 
        h-[100%] float-right overflow-auto object-cover'/>
    } else if (heroCount === 1) {
        return <img src={image3} alt="" className='w-[50%] 
        h-[100%] float-right overflow-auto object-cover'/>
    }
    else if (heroCount === 2) {
        return <img src={image2} alt="" className='w-[50%] 
        h-[100%] float-right overflow-auto object-left'/>
    }
    else if (heroCount === 3) {
        return <img src={image4} alt="" className='w-[50%] 
        h-[100%] float-right overflow-auto object-cover'/>
    }
}


export default Background
