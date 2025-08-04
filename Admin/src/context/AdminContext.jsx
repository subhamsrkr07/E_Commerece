import React, {createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './Authcontext'
import axios from 'axios'

export const adminDataContext = createContext()
const AdminContext = ({children}) => {
    let[adminData,setAdminData]=useState(null)
    let {serverUrl}=useContext(authDataContext)


  const getAdmin = async()=>{
    try {
      

     let result = await axios.get(serverUrl + "/api/user/getadmin",{withCredentials:true})
     
    setAdminData(result.data)
    console.log(result.data)

  }
      
     catch (error) {
      setAdminData(null)
      console.log(error)
    }
  }
    useEffect(()=>{
      getAdmin()
    },[])
   

    let value={
        adminData,setAdminData,getAdmin
    }
  return (
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>
  )
}

export default AdminContext


// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { authDataContext } from './Authcontext'
// import axios from 'axios'

// export const adminDataContext = createContext()

// const AdminContext = ({ children }) => {
//   const [adminData, setAdminData] = useState(null)
//   const { serverUrl } = useContext(authDataContext)

//   const getAdmin = async () => {
//     try {
//       const result = await axios.get(`${serverUrl}/api/user/getadmin`, {
//         withCredentials: true,
//       })
//       setAdminData(result.data)
//       console.log(result.data)
//     } catch (error) {
//       setAdminData(null)
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     getAdmin()
//   }, [])

//   const value = {
//     adminData,
//     setAdminData,
//     getAdmin,
//   }

//   return (
//     <adminDataContext.Provider value={value}>
//       {children}
//     </adminDataContext.Provider>
//   )
// }

// export default AdminContext
