import React from 'react'
import contact from "../assets/contact.jpeg"
import Title from '../component/Title'
import NewLetterBox from '../component/NewLetterBox'
const Contact = () => {
  return (
     <div className=' w-[100vw] min-h-[100vh] flex items-center justify-center
    flex-col bg-gradient-to-l from-[#141414] to-[#0c3035] gap-[50px]
    pt-[80px]'>
        <Title text1={"CONTACT"} text2={"us"} />
      <div className='w-[100%] flex items-center justify-center
      flex-col lg:flex-row'>
            <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
                  <img src={contact} alt="" className='lg:w-[70%] w-[80%]
                  shadow-md shadow-black rounded-sm'/>
                </div>
                <div className='lg:w-[50%] w-[80%] flex items-start
         justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>

             <p className='lg-w-[80%] w-[100%] text-white lg:text-[18px] text-[15px] font-bold' >
              Our Store
             </p>
              <p className='lg-w-[80%] w-[100%] text-white md:text-[16px] text-[13px]' >
              <p> 12345 Random Station</p>
              <p> random city,state,india</p>
             </p>
               <p className='lg-w-[80%] w-[100%] text-white md:text-[16px] text-[13px]' >
              <p> tel +919893709312</p>
              <p> Email : shubhamsrkr07@gmail.com</p>
             </p>

         </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact
