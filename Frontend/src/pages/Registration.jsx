import React, { useContext, useState } from 'react'
import navbar from "../assets/navbar.webp"
import google_logo from "../assets/google_logo.jpeg"
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import axios from 'axios'
import { authDataContext } from '../context/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/Firebase';
import { userDataContext } from '../context/UserContext';
const Registration = () => {

  let [show, setshow] = useState(false)
  let { serverUrl } = useContext(authDataContext)
  let [name, setname] = useState("")
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")
  let {getCurrentUser}=useContext(userDataContext )
  


  let navigate = useNavigate()


  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(serverUrl + '/api/auth/registration', { name, email, password }, { withCredentials: true })
      console.log(result.data)
      getCurrentUser()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      let user = response.user
      let name = user.displayName;
      let email = user.email
      const result = await axios.post(serverUrl + "/api/auth/googlelogin", { name, email }, { withCredentials: true })
      console.log(result.data)
       getCurrentUser()
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#194475] to-[#797C80] text-[white] flex flex-col items-center justify-start '>
      <div className='w-[100%] h-[80px] flex item-center justify-start px-[30px] py-[10px] gap-[10px cursor-pointer]' onClick={() => navigate("/")}>
        <img className='w-[40px] h-[40px]' src={navbar} alt="" />
        <h1 className='text-[22px] font-sans'>Vidyut</h1>
      </div>
      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[25px] font-samibold'>Registrartion</span>
        <span className='text-[16px]'>Welcome to Vidyut, Place Your Order</span>
      </div>
      <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flem items-center justify-center'>
        <form action='' onSubmit={handleSignup} className='w-[100%]  h-[90%] flex flex-col items-center justify-start gap-[20px] py-[20px]'>
          <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup}>
            <img className='w-[20px]' src={google_logo} alt="" /> Registration with Google
          </div>
          <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[blue]'></div> OR <div className='w-[40%] h-[1px] bg-[blue]'></div>
          </div>
          <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
            <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#9969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Username' required onChange={(e) => setname(e.target.value)} value={name} />
            <input type="email" className='w-[100%] h-[50px] border-[2px] border-[#9969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required onChange={(e) => setemail(e.target.value)} value={email} />
            <input type={show ? "text" : 'password'} className='w-[100%] h-[50px] border-[2px] border-[#9969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required onChange={(e) => setpassword(e.target.value)} value={password} />
            {!show && <IoEyeOutline className='h-[20px] w-[20px] cursor-pointer absolute right-[5%]' onClick={() => setshow(prev => !prev)} />}
            {show && <IoEye className='h-[20px] w-[20px] cursor-pointer absolute right-[5%]' onClick={() => setshow(prev => !prev)} />}
            <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex-flex-col items-center justify-center mt-[20px] text-[17px] fomt-semibold'>Create an Account</button>
            <p className='flex gap-[10px]'>You have any account?
              <span className='text-[#5555f6cf] text-[17px] font-semibold cursior-pointer' onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
