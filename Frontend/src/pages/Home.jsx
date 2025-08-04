import React, { useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Background from '../component/Background'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'

const Home = () => {

  let heroData=[
    {text1:"Telecom",text2:"Energy Solution"},
    {text1:"Powering",text2:"Electric Mobility"},
    {text1:"Innovation",text2:"Safe,Sustainable & Smart"},
    {text1:"Energy Storage",text2:"System"}
  ]
  let [heroCount,setHeroCount]=useState(0)
  

  useEffect(()=>{
    let interval = setInterval(()=>{
      setHeroCount(prevCount =>(prevCount === 3?0 : prevCount+1))
    },3000)
    return ()=> clearInterval(interval)
  },[])

  return (
    <div className='overflow-x-hidden relative top-[70px]'>
    <div className='w-[100vw] lg:h-[100vh]  md;h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      <Background heroCount={heroCount}/>
      <Hero heroCount={heroCount} 
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}/>
      <Nav/>
    </div>
    <Product/>
    <OurPolicy/>
    <NewLetterBox/>
    <Footer/>
    </div>
  ) 
}

export default Home
