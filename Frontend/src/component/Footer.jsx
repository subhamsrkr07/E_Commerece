import React from 'react'
import navbar from "../assets/navbar.webp"
const Footer = () => {
    return (
        <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
            <div className='w-[100%] md:h-[30vh] md:mb-[0px]  bg-[#FFD700] 
      flex items-center justify-center md:px-[50px] px-[5px]'>
                <div className='md:w-[30%] w-[35%] h-[100%] flex items-start
        justify-center flex-col gap-[5px]'>
                    <div className='flex item-start justify-start gap-[5px] mt-[10px] 
            md:mt-[40px]'>
                        <img src={navbar} alt="" className='md:w-[40px] 
                    md:h-[40px] w-[30px] h-[30px]' />
                        <p className='text-[19px] md:text-[20px] text-black'>Vidyut</p>

                    </div>
                    <p className='text-[15px] text-[#1e2223] hidden md:block'>
                        Vidhut brings you trusted battery technology, great value, and delivery that’s as fast as your charge.
                    </p>
                    <p className='text-[15px] text-[#1e2223] flex md:block'> Fast Easy Reliable our wubsite </p>



                </div>

                <div className='md:w-[25%] w-[30%] h-[100%] flex items-center
        justify-center flex-col text-center'>
                    <div className='flex item-center justify-center gap-[5px] mt-[10px] 
            md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'> COMPANY</p>
                    </div>
                    <ul>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>Home</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>Abiut us</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>Delivery</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>Private Policy</li>
                    </ul>
                </div>
            </div>
            <div className='w-[100%] h-[1px] bg-slate-400 '></div>
            <div className='w-[100%] h-[5vh] bg-[#D7D7D7] 
            flex items-center justify-center '>
                Copyright 2025@Vidyut.com All Rights Reserved
            </div>

        </div>
    )
}

export default Footer
