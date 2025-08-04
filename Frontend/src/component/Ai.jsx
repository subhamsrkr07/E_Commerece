import React, { useContext, useState } from 'react'
import AI from "../assets/AI.jpeg"
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import open from "../assets/open.mp3"

const Ai = () => {

    let {showSearch , setShowSearch} = useContext(shopDataContext)
    let navigate = useNavigate()
    let openingSound = new Audio(open)
    let [activeAi,setActiveAi]=useState(false)


    function speak(message){
        let utterence = new SpeechSynthesisUtterance(message)
        window.speechSynthesis.speak(utterence)
    }

    const speechRecognition = window.SpeechRecognition ||
     window.webkitSpeechRecognition
     const recognition = new speechRecognition()
     if(!recognition){
        console.log("not supported")
     }

     recognition.onresult = (e)=>{
        const transcript = e.results[0][0].transcript.trim();
        try {
             if(transcript.toLowerCase().includes("search") && transcript.
    toLowerCase().includes("open") && !showSearch){
        speak("opening search")
        setShowSearch(true)
        navigate("/collection")
    }
    else if(transcript.toLowerCase().includes("search") && transcript.
    toLowerCase().includes("close") && showSearch){
        speak("closing search")
        setShowSearch(false)
      
     }
      else if(transcript.toLowerCase().includes("collection") || transcript.
    toLowerCase().includes("collections")){
        speak("opening collection page")
        navigate("/collection")
    }
    else if(transcript.toLowerCase().includes("about") || transcript.
    toLowerCase().includes("aboutpage")){
        speak("opining about page")
        navigate("/about")
        setShowSearch(false)
    }
    else if(transcript.toLowerCase().includes("home") ||transcript.
    toLowerCase().includes("homepage")){
        speak("open home page")
        navigate("/")
        setShowSearch(false)
    }
    else if(transcript.toLowerCase().includes("contact") || transcript.
    toLowerCase().includes("contactpage")){
        speak("opening contact page")
        navigate("/contact")
    }
        } catch (error) {
            console.log(error)
        }
    
}
recognition.onend=()=>{
    setActiveAi(false)
}
  return (
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px]
    left-[2%]' onClick={()=>{recognition.start();openingSound.play()
     setActiveAi(true)}}>
      <img src={AI} alt="" className={`w-[100px] cursor-pointer
         ${activeAi ? "traslate-x-[10%] translate-y-[-10%] scale-125":
         "translate-x-[0] translate-y-[0] scale-100"}transition-transform `} style={{
            filter:`${activeAi?"drop-shadow(0px 0px 30px #00d2fc)":
                "drop-shadow(0px 0px 20px black)"}`
         }} />

    </div>
  )
}

export default Ai
