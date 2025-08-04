import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'

const Home = () => {
  return (
    <div className='w-[100vw] h-[100vh] 
    bg-gradient-to-l from-[#141414] to-[#0c2025]
     text-[white] relative'>  
      <Nav/>
      <Sidebar/>

      <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px]
        flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px]'>
              <div className='w-[600px] h-[50px] text-[28px] md:text-[40px] mb-[20px] flex justify-center items-center text-white'>
                WelCome to Admin-Panel
              </div>
              </div>
      
    </div>
  )
}

export default Home
