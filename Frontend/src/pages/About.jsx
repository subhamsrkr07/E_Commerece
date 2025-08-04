import React from 'react'
import Title from "../component/Title"
import about from "../assets/about.jpg"
import NewLetterBox from "../component/NewLetterBox"

const About = () => {
  return (
    <div className=' w-[100vw] min-h-[100vh] flex items-center justify-center
    flex-col bg-gradient-to-l from-[#141414] to-[#0c3035] gap-[50px]
    pt-[80px]'>
      <Title text1={"About"} text2={"us"} />
      <div className='w-[100%] flex items-center justify-center
      flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img src={about} alt="" className='lg:w-[65%] w-[80%]
          shadow-md shadow-black rounded-sm'/>
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start
         justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg-w-[80%] w-[100%] text-white md:text-[16px] text-[13px]' >
            Vidyut is one of the top shopping platforms for cutting-edge battery products, 
            offering premium quality, trending new items, and lightning-fast delivery. 
            Powered by AI, Vidyut delivers a smarter, more personalized shopping experience 
            tailored to your needs.
          </p>
          <p className='lg-w-[80%] w-[100%] text-white md:text-[16px] text-[13px]' >
            We bring everything you need to one trusted platform – with fast delivery, 
            easy returns, and dedicated customer support to make your journey seamless

          </p>
          <p className='lg-w-[80%] w-[100%] text-white lg:text-[18px] text-[15px] mt-[10px] font-bold' >
            Our Mission
          </p>
          <p className='lg-w-[80%] w-[100%] text-white md:text-[16px] text-[13px]' >
            Driving the power within and committing to our mission of providing reliable power solutions 
            to businesses, covering a wide range of related fields in Lithium-ion technology 
          </p>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About
