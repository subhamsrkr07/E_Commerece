import React, { useContext, useState } from 'react'
import navbar from '../assets/navbar.webp'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import {authDataContext} from "../context/Authcontext.jsx"
import axios from "axios"
import { adminDataContext } from '../context/AdminContext.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [show, setshow] = useState(false)
     let[email,setemail] = useState("")
    let[password,setpassword] = useState("")
    let {serverUrl}=useContext(authDataContext)
    let {adminData,getAdmin} = useContext(adminDataContext)
    let navigate = useNavigate()

    const AdminLogin = async(e)=>{
      e.preventDefault()
      try{
          const result = await axios.post(serverUrl + '/api/auth/adminlogin',{email,password},{withCredentials:true})
          console.log(result.data)
          getAdmin()
          navigate("/")
        }catch(error){
            console.log(error)
      }
    }

  return ( <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start '>
              <div className='w-[100%] h-[80px] flex item-center justify-start px-[30px] py-[10px] gap-[10px cursor-pointer]' >
                  <img className='w-[60px]' src={navbar} alt="" />
                  <h1 className='text-[22px] font-sans'>Vidyut</h1>
              </div>
              <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
                  <span className='text-[25px] font-samibold'>LOGIN</span>
                  <span className='text-[16px]'>Welcome to Vidyut, Apply to admin Login</span>
              </div>
              <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flem items-center justify-center'>
                  <form action='' onSubmit={AdminLogin}className='w-[100%]  h-[90%] flex flex-col items-center justify-start gap-[20px] py-[20px]'>
                      <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
                          <input type="email" className='w-[100%] h-[50px] border-[2px] border-[#9969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required  onChange={(e)=>setemail(e.target.value)} value={email}/>
                          <input type={show ? "text" : 'password'} className='w-[100%] h-[50px] border-[2px] border-[#9969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required   onChange={(e)=>setpassword(e.target.value)} value={password} />
                          {!show && <IoEyeOutline className='h-[20px] w-[20px] cursor-pointer absolute right-[5%] bottom-[50%]' onClick={() => setshow(prev => !prev)} />}
                          {show && <IoEye className='h-[20px] w-[20px] cursor-pointer absolute right-[5%] botttom-[50%]' onClick={() => setshow(prev => !prev)} />}
                          <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex-flex-col items-center justify-center mt-[20px] text-[17px] fomt-semibold'>Login</button>
                     
                      </div>
                  </form>
              </div>
          </div>
      )
  
}

export default Login
