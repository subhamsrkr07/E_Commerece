import React, { useContext } from 'react'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './component/Nav'
import { userDataContext } from './context/UserContext'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import About from './pages/About'
import { Navigate } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Ai from './component/Ai'

const App = () => {
  let { userData } = useContext(userDataContext)
  let location = useLocation()
  return (
    <> 
    
      {userData && <Nav />}

      <Routes>

        <Route path="/login" 
        element={
        userData?(<Navigate to={location.state?.from || "/"}/>)
          :(<Login/>)
      } />

{/*          <Route path="/login" element={<Login/>}/> */}

        <Route path="/signup"
         element={userData?(<Navigate to={location.state?.from || "/"}/>)
          :(<Registration/>)} />


        <Route path="/" 
        element={userData ? <Home/> : <Navigate to ="/login" state={{from: location.pathname}}/>} />


        <Route path="/about" element={userData ? <About/> : <Navigate to ="/login" state={{from: location.pathname}}/>}/>


        <Route path="/collection" element={userData ? <Collections/> : <Navigate to ="/login" state={{from: location.pathname}}/>} />


        <Route path="/product" element={userData ? <Product/> : <Navigate to ="/login" state={{from: location.pathname}}/>} />

        <Route path="/contact" element={userData ? <Contact/> : <Navigate to ="/login" state={{from: location.pathname}}/>} />

        <Route path="/productdetail/:productId" element={userData ? <ProductDetails/> : <Navigate to ="/login" state={{from: location.pathname}}/>} /> 

       

        


      </Routes>
      <Ai/>
    </>
  )
}

export default App
