import React,{createContext, useEffect, useState}from 'react'
import { authDataContext } from './AuthContext'
import { useContext } from 'react'
import axios from 'axios'


export const userDataContext = createContext()
function UserContext({children}){
    let [userData ,setUserData]=useState(null)
    let {serverUrl}=useContext(authDataContext)
      
    const getCurrentUser = async(req,res)=>{
        try {

            if (!req.user) {
    return res.status(401).json({ message: "Not logged in" });
  }

  // If user is logged in
  res.status(200).json(req.user);

            
            let result = await axios.get(serverUrl + "/api/user/getcurrentuser", { withCredentials: true, })


            setUserData(result.data)
            console.log(result.data)

        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getCurrentUser()
    },[])


    
    let value = {
        userData,setUserData,getCurrentUser
    }


  

  return (
    <div>
      <userDataContext.Provider value ={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
